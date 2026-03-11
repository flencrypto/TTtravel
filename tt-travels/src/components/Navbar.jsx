import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/explore', label: 'Explore' },
  { to: '/journal', label: 'Journal' },
  { to: '/ai', label: 'AI Planner' },
  { to: '/calendar', label: 'Trips' },
  { to: '/settings', label: 'Settings' },
]

function Navbar() {
  return (
    <header className="glass-panel nav-shell rounded-2xl px-4 py-4 md:px-6 md:py-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">TT Travels Suite</p>
          <h1 className="text-lg md:text-xl font-semibold text-slate-900">Design-forward travel command center</h1>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-dot" aria-hidden="true" />
          Platform status: healthy
        </div>
      </div>
      <nav className="mt-4 flex flex-wrap gap-2" aria-label="Primary">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 nav-link ${
                isActive
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]'
                  : 'bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900 hover:-translate-y-0.5'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
