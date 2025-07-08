import React, { useState } from 'react'
import { useStore } from '../services/store'

function SimpleCalendar() {
  const [date, setDate] = useState('')
  const addTrip = useStore((s) => s.addTrip)

  function handleAdd() {
    if (!date) return
    addTrip({ date })
    setDate('')
  }

  return (
    <div className="space-y-2">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Trip Day
      </button>
    </div>
  )
}

export default SimpleCalendar
