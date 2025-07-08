# TT's Travels

This repo contains a minimal scaffold for **TT's Travels**, an offline-first travel journal and planner.

## Features

- React + Vite + Tailwind
- Geolocation based "Explore Nearby" screen
- Photo journal uploader
- AI trip generator and "What can I do today" suggestions
- Weather and event lookups via free APIs
- Basic calendar and trip planning views

Run locally:

```bash
cd tt-travels
npm install
npm run dev
```

## Architecture overview

The app uses React with Zustand for local-first state stored in `localStorage`.  
Service modules under `src/services` wrap API calls for weather, events, flight
links and stays. UI is organised into modular components in `src/components` and
pages under `src/pages`. Animation hooks can be added with Framer Motion or CSS
transitions.

Data such as trips and journal entries is persisted locally and can later be
exported for sharing. See inline comments in the code for extension points.
