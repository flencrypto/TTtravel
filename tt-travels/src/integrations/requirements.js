/**
 * Integration requirements registry.
 * Single source of truth for all features that need external credentials.
 */

export const INTEGRATIONS = [
  {
    id: 'openai',
    name: 'AI Trip Planner (OpenAI)',
    description:
      'Generates personalised, day-by-day travel itineraries using OpenAI GPT. ' +
      'Without this key the planner falls back to generic template suggestions.',
    envVars: ['VITE_OPENAI_API_KEY'],
    optionalEnvVars: ['VITE_OPENAI_MODEL'],
    oauthRequired: false,
    whereToGet: [
      'Go to https://platform.openai.com/signup and create a free account.',
      'Navigate to API Keys → Create new secret key.',
      'Copy the key and add it to a .env file at the root of tt-travels/ as:',
      '  VITE_OPENAI_API_KEY=sk-...',
      'Restart the dev server (npm run dev) for the variable to take effect.',
    ],
    officialLinks: ['https://platform.openai.com/api-keys'],
    affectedRoutes: ['/ai'],
    affectedActions: ['Generate Trip button on the AI Planner page'],
    serverOnly: false,
    note:
      'This is a client-side Vite app; the key is bundled into the browser build. ' +
      'For production use, proxy requests through a server to keep the key secret.',
  },
  {
    id: 'geolocation',
    name: 'Explore Nearby (Browser Geolocation)',
    description:
      'Shows your current position on the map and fetches live weather. ' +
      'Requires the user to grant the browser location permission — no API key needed.',
    envVars: [],
    optionalEnvVars: [],
    oauthRequired: false,
    whereToGet: [
      'When visiting the Explore page, click "Allow" in the browser permission prompt.',
      'If you previously denied permission, reset it via the browser address-bar lock icon → Site settings → Location.',
    ],
    officialLinks: [
      'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
    ],
    affectedRoutes: ['/explore'],
    affectedActions: ['Explore Nearby page load'],
    serverOnly: false,
    note: 'Weather data is fetched from Open-Meteo (https://open-meteo.com) — free and no key required.',
  },
]

/**
 * Returns the list of missing environment variable names for a given integration id.
 * In a Vite app, env vars are accessed via import.meta.env.
 */
export function getMissingEnvVars(integrationId) {
  const integration = INTEGRATIONS.find((i) => i.id === integrationId)
  if (!integration) return []
  return integration.envVars.filter((v) => !import.meta.env[v])
}

/**
 * Returns true when all required env vars for an integration are present.
 */
export function isConfigured(integrationId) {
  return getMissingEnvVars(integrationId).length === 0
}
