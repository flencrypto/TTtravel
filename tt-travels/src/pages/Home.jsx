import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">TT's Travels</h1>
      <nav className="space-x-4">
        <Link className="text-blue-600" to="/explore">Explore Nearby</Link>
        <Link className="text-blue-600" to="/journal">Photo Journal</Link>
        <Link className="text-blue-600" to="/ai">AI Trip Generator</Link>
      </nav>
    </div>
  )
}

export default Home
