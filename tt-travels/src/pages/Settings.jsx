import React, { useState } from 'react'

const STORAGE_KEY = 'tt-travels-settings'

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function Settings() {
  const initial = loadSettings()
  const [name, setName] = useState(initial.name || '')
  const [unit, setUnit] = useState(initial.unit || 'metric')
  const [saved, setSaved] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, unit }))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">⚙️ Settings</h2>
      <form onSubmit={handleSave} className="space-y-4 bg-gray-50 p-4 rounded-xl border">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Display name</label>
          <input
            className="border p-2 rounded w-full"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Temperature unit</label>
          <select
            className="border p-2 rounded w-full"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="metric">Celsius (°C)</option>
            <option value="imperial">Fahrenheit (°F)</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
        {saved && <span className="text-green-600 text-sm ml-3">✓ Saved!</span>}
      </form>
    </div>
  )
}

export default Settings
