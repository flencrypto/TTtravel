import React from 'react'
import { Link } from 'react-router-dom'

const features = [
  { to: '/explore', emoji: '🗺️', title: 'Explore Nearby', desc: 'See your location on the map and check current weather.' },
  { to: '/journal', emoji: '📷', title: 'Photo Journal', desc: 'Upload and browse your travel photos.' },
  { to: '/ai', emoji: '🤖', title: 'AI Trip Planner', desc: 'Generate a day-by-day itinerary for any destination.' },
  { to: '/calendar', emoji: '📅', title: 'My Trips', desc: 'Create and manage your upcoming travel plans.' },
]

function Home() {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-blue-700">✈️ TT's Travels</h1>
        <p className="text-gray-500">Your personal travel journal and trip planner.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map(({ to, emoji, title, desc }) => (
          <Link
            key={to}
            to={to}
            className="block p-4 border rounded-xl hover:shadow-md transition bg-white space-y-1"
          >
            <div className="text-2xl">{emoji}</div>
            <div className="font-semibold text-gray-800">{title}</div>
            <div className="text-sm text-gray-500">{desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
