# TT's Travels

This repo contains a minimal scaffold for **TT's Travels**, an offline-first travel journal and planner. The build uses a service worker so it can be installed as a Progressive Web App (PWA) on iOS and Android.

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

To package the app as an iOS executable using Capacitor:

```bash
cd tt-travels
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "TTsTravels" "com.example.ttstravels" --web-dir=dist
npm run build
npx cap sync ios
npx cap open ios # requires macOS with Xcode
```

After opening the workspace in Xcode you can archive the project to produce an `.ipa` file for distribution.

To run the web build directly on an iPhone without Xcode, deploy the `dist/` folder to a static host. When opened in Safari, tap **Share → Add to Home Screen** to install the app as an offline-capable PWA.

### Single-file build for any phone

An alternate build mode outputs a single `index.html` with all scripts and styles
inlined. This file can be opened directly on any phone without installation.

```bash
cd tt-travels
npm run build:single
```

The generated file under `dist-single/` can be shared and opened offline in any
modern mobile browser.

## Architecture overview

The app uses React with Zustand for local-first state stored in `localStorage`.  
Service modules under `src/services` wrap API calls for weather, events, flight
links and stays. UI is organised into modular components in `src/components` and
pages under `src/pages`. Animation hooks can be added with Framer Motion or CSS
transitions.

Data such as trips and journal entries is persisted locally and can later be
exported for sharing. See inline comments in the code for extension points.
