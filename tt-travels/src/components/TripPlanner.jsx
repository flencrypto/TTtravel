import React, { useState, useEffect } from 'react'

const STORAGE_KEY = 'tt-travels-trips'

function TripPlanner() {
  const [trips, setTrips] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  })
  const [name, setName] = useState('')
  const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trips))
  }, [trips])

  function handleAdd(e) {
    e.preventDefault()
    if (!name || !destination || !startDate || !endDate) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setTrips((prev) => [
      ...prev,
      { id: Date.now(), name, destination, startDate, endDate },
    ])
    setName('')
    setDestination('')
    setStartDate('')
    setEndDate('')
  }

  function handleRemove(id) {
    setTrips((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">📅 My Trips</h2>
      <form onSubmit={handleAdd} className="space-y-3 bg-gray-50 p-4 rounded-xl border">
        <h3 className="font-medium text-gray-700">Add a new trip</h3>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="border p-2 rounded w-full"
          placeholder="Trip name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="text-xs text-gray-500">Start date</label>
            <input
              type="date"
              className="border p-2 rounded w-full"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-500">End date</label>
            <input
              type="date"
              className="border p-2 rounded w-full"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Trip
        </button>
      </form>
      {trips.length === 0 ? (
        <p className="text-gray-400 text-center">No trips planned yet. Add one above!</p>
      ) : (
        <ul className="space-y-3">
          {trips.map((trip) => (
            <li
              key={trip.id}
              className="flex items-start justify-between p-4 bg-white border rounded-xl shadow-sm"
            >
              <div>
                <div className="font-semibold">{trip.name}</div>
                <div className="text-sm text-gray-500">📍 {trip.destination}</div>
                <div className="text-sm text-gray-400">
                  {trip.startDate} → {trip.endDate}
                </div>
              </div>
              <button
                onClick={() => handleRemove(trip.id)}
                className="text-red-400 hover:text-red-600 text-sm mt-1"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TripPlanner
