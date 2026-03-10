import React from 'react'
import { Link } from 'react-router-dom'

const kpis = [
  { label: 'Trips planned', value: '120k+' },
  { label: 'Saved planning hours', value: '2.1M' },
  { label: 'Traveler satisfaction', value: '98%' },
  { label: 'Integrations live', value: '42' },
]

const quickActions = [
  { label: 'Create AI itinerary', to: '/ai' },
  { label: 'Discover nearby spots', to: '/explore' },
  { label: 'Open trip calendar', to: '/calendar' },
]

const workflow = [
  { step: '01', title: 'Define trip goals', desc: 'Set destination, budget, and pace in under a minute.' },
  { step: '02', title: 'Generate smart plan', desc: 'Create a day-by-day itinerary with AI recommendations.' },
  { step: '03', title: 'Operate with confidence', desc: 'Track plans, journal moments, and adjust in real time.' },
]

const features = [
  {
    to: '/explore',
    title: 'Explore Nearby',
    desc: 'Discover attractions around your location with weather context.',
  },
  {
    to: '/journal',
    title: 'Photo Journal',
    desc: 'Capture highlights and keep trip memories organized by timeline.',
  },
  {
    to: '/ai',
    title: 'AI Trip Planner',
    desc: 'Build personalized itineraries and instantly iterate your plan.',
  },
  {
    to: '/calendar',
    title: 'Trip Calendar',
    desc: 'Coordinate departures, stays, and activities in one view.',
  },
]

function Home() {
  return (
    <section className="space-y-8 p-2 md:p-0">
      <div className="hero-shell rounded-3xl p-8 text-white md:p-10 relative overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-trace" aria-hidden="true" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Figma-inspired premium experience</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:max-w-3xl md:text-5xl text-balance">
              Plan, operate, and optimize travel in one modern workspace.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-200">
              TT Travels delivers a professional command center for high-quality travel planning and execution.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/ai" className="cta-primary">
                Create itinerary
              </Link>
              <Link to="/setup" className="cta-secondary">
                Configure workspace
              </Link>
            </div>
          </div>

          <aside className="glass-surface rounded-2xl p-4 md:p-5 lg:ml-auto lg:w-full lg:max-w-xs">
            <p className="text-xs uppercase tracking-[0.18em] text-sky-100/80">Quick actions</p>
            <div className="mt-3 grid gap-2">
              {quickActions.map(({ label, to }) => (
                <Link key={to} to={to} className="quick-action-link dark-on-hero">
                  {label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map(({ label, value }) => (
          <div key={label} className="kpi-card rounded-2xl border border-slate-200/80 bg-white/85 p-4">
            <p className="text-2xl font-semibold text-slate-900">{value}</p>
            <p className="text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">How it works</h3>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Simple 3-step workflow</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {workflow.map(({ step, title, desc }) => (
            <div key={step} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold text-sky-600">{step}</p>
              <h4 className="mt-1 font-semibold text-slate-900">{title}</h4>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Core capabilities</h3>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Designed for speed</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {features.map(({ to, title, desc }, index) => (
            <Link
              key={to}
              to={to}
              className="feature-card group rounded-2xl border border-white/60 bg-white/80 p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
                <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700">→</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
