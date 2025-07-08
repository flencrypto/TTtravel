import { create } from 'zustand'

function load(key, fallback) {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : fallback
  } catch {
    return fallback
  }
}

export const useStore = create((set, get) => ({
  trips: load('trips', []),
  journal: load('journal', []),
  addTrip: (trip) => set((state) => {
    const updated = [...state.trips, trip]
    localStorage.setItem('trips', JSON.stringify(updated))
    return { trips: updated }
  }),
  addEntry: (entry) => set((state) => {
    const updated = [...state.journal, entry]
    localStorage.setItem('journal', JSON.stringify(updated))
    return { journal: updated }
  })
}))
