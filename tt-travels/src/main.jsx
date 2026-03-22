import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const serviceWorkerPath = `${import.meta.env.BASE_URL}service-worker.js`

    if (import.meta.env.PROD) {
      navigator.serviceWorker
        .register(serviceWorkerPath, { scope: import.meta.env.BASE_URL })
        .catch((error) => {
          console.warn('Service worker registration failed', error)
        })
    } else {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          for (const registration of registrations) {
            registration.unregister().catch(() => {})
          }
        })
    }
  })
}
