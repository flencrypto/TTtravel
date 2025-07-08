import React, { useEffect, useState } from 'react'
import MapViewer from './MapViewer'
import { getWeather } from '../services/weather'

function ExploreNearby() {
  const [position, setPosition] = useState(null)
  const [weather, setWeather] = useState(null)
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
    </div>
  )
}

export default ExploreNearby
