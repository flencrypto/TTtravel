import React, { useEffect, useState } from 'react'
import MapViewer from './MapViewer'
import { getWeather } from '../services/weather'
import { getEvents } from '../services/events'

function ExploreNearby() {
  const [position, setPosition] = useState(null)
  const [weather, setWeather] = useState(null)
  const [events, setEvents] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        getWeather(pos.coords.latitude, pos.coords.longitude).then(setWeather)
        getEvents(pos.coords.latitude, pos.coords.longitude).then((r) =>
          setEvents(r.features || [])
        )
      },
      () => setError('Unable to retrieve location')
    )
  }, [])

  if (error) return <div>{error}</div>
  if (!position) return <div>Getting location...</div>

  return (
    <div className="space-y-4">
      <MapViewer lat={position.lat} lng={position.lng} />
      {weather && (
        <div className="p-4 bg-blue-100 rounded">Weather: {weather.main.temp}°C</div>
      )}
      {events.length > 0 && (
        <div className="p-4 bg-green-100 rounded">
          <h3 className="font-semibold mb-1">Nearby Events</h3>
          <ul className="list-disc pl-5 space-y-1">
            {events.slice(0,5).map((ev) => (
              <li key={ev.properties.id}>{ev.properties.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ExploreNearby
