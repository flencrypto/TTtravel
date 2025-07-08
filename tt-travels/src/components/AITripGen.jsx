import React, { useState } from 'react'
import { generateTrip } from '../services/ai'

function AITripGen() {
  const [location, setLocation] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    setLoading(true)
    try {
      const res = await generateTrip(`Plan a trip to ${location}`)
      setResult(res.plan)
    } catch (e) {
      setResult('Failed to get plan')
    }
    setLoading(false)
  }

  return (
    <div className="space-y-2">
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter destination"
      />
      <button
        onClick={handleGenerate}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {loading ? 'Loading...' : 'Generate Trip'}
      </button>
      {result && <pre className="whitespace-pre-wrap bg-gray-100 p-2">{result}</pre>}
    </div>
  )
}

export default AITripGen
