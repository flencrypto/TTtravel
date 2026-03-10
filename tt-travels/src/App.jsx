import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Journal from './pages/Journal'
import AI from './pages/AI'
import Calendar from './pages/Calendar'
import Settings from './pages/Settings'
import Setup from './pages/Setup'

function App() {
  return (
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="min-h-screen travel-app-bg relative overflow-hidden">
        <div className="decor-orb decor-orb-left" aria-hidden="true" />
        <div className="decor-orb decor-orb-right" aria-hidden="true" />
        <div className="decor-grid" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8 space-y-6">
          <Navbar />
          <main id="main-content" className="glass-panel rounded-3xl p-4 md:p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/ai" element={<AI />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/setup" element={<Setup />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
