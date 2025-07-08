import React, { useEffect, useState } from 'react'
import { suggestActivities } from '../services/whatToday'

function WhatToday() {
  const [ideas, setIdeas] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const res = await suggestActivities(
          pos.coords.latitude,
          pos.coords.longitude
        )
        setIdeas(typeof res === 'string' ? res : JSON.stringify(res, null, 2))
      } catch {
        setError('Failed to get suggestions')
      }
    }, () => setError('Unable to retrieve location'))
  }, [])

  if (error) return <div>{error}</div>
  if (!ideas) return <div>Loading suggestions...</div>

  return (
    <pre className="whitespace-pre-wrap bg-gray-100 p-2">{ideas}</pre>
  )
}

export default WhatToday
