import React, { useEffect, useState } from 'react'
import MapViewer from './MapViewer'
import { getWeather } from '../services/weather'

function loadUnit() {
  try {
    return JSON.parse(localStorage.getItem('tt-travels-settings'))?.unit || 'metric'
  } catch {
    return 'metric'
  }
}

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
        const unit = loadUnit()
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        getWeather(pos.coords.latitude, pos.coords.longitude, unit).then(setWeather)
      },
      () => setError('Unable to retrieve location')
    )
  }, [])

  if (error) return <div>{error}</div>
  if (!position) return <div>Getting location...</div>

  const unitSymbol = weather?.unit === 'imperial' ? '°F' : '°C'

  return (
    <div className="space-y-4">
      <MapViewer lat={position.lat} lng={position.lng} />
      {weather && (
        <div className="p-4 bg-blue-100 rounded">Weather: {weather.main.temp}{unitSymbol}</div>
      )}
    </div>
  )
}

export default ExploreNearby
