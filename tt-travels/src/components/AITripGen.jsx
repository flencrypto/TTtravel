import React, { useState } from 'react'
import { generateTrip, MissingApiKeyError } from '../services/ai'
import SetupModal from './SetupModal'

function AITripGen() {
  const [location, setLocation] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSetup, setShowSetup] = useState(false)

  async function handleGenerate() {
    if (!location.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await generateTrip(`Plan a trip to ${location}`)
      setResult(res.plan)
    } catch (err) {
      if (err instanceof MissingApiKeyError) {
        setShowSetup(true)
      } else {
        setError(err.message || 'Failed to generate trip plan. Please try again.')
      }
    }
    setLoading(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleGenerate()
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500">
        Enter a destination and get a personalised day-by-day itinerary powered by AI.
      </p>
      <div className="flex gap-2">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded flex-1"
          placeholder="e.g. Tokyo, Japan"
          aria-label="Destination"
        />
        <button
          onClick={handleGenerate}
          disabled={loading || !location.trim()}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? 'Generating…' : 'Generate Trip'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      {result && (
        <pre className="whitespace-pre-wrap bg-gray-100 border rounded-lg p-4 text-sm leading-relaxed">
          {result}
        </pre>
      )}

      {showSetup && (
        <SetupModal integrationId="openai" onClose={() => setShowSetup(false)} />
      )}
    </div>
  )
}

export default AITripGen
