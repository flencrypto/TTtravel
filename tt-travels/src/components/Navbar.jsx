import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: '🏠 Home' },
  { to: '/explore', label: '🗺️ Explore' },
  { to: '/journal', label: '📷 Journal' },
  { to: '/ai', label: '🤖 AI Planner' },
  { to: '/calendar', label: '📅 Trips' },
  { to: '/settings', label: '⚙️ Settings' },
  { to: '/setup', label: '🔧 Setup' },
]

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex flex-wrap gap-3">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `text-sm font-medium hover:underline ${isActive ? 'underline opacity-100' : 'opacity-80'}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
