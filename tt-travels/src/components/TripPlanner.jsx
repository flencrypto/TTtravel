import React from 'react'
import { useStore } from '../services/store'
import SimpleCalendar from './SimpleCalendar'

function TripPlanner() {
  const trips = useStore((s) => s.trips)

  return (
    <div className="space-y-4">
      <SimpleCalendar />
      <ul className="list-disc pl-5">
        {trips.map((t, i) => (
          <li key={i}>{t.date}</li>
        ))}
      </ul>
    </div>
  )
}

export default TripPlanner
