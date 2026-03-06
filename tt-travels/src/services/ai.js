const ITINERARY_TEMPLATES = [
  'Explore the historic old town and visit local landmarks.',
  'Tour the top museums and art galleries.',
  'Take a scenic hike or nature walk in the surrounding area.',
  'Sample local cuisine at a traditional restaurant.',
  'Shop for souvenirs at the local market.',
  'Relax at a nearby beach, park, or viewpoint.',
  'Join a guided cultural tour or cooking class.',
]

const DEFAULT_TRIP_DAYS = 5

/** Sentinel error type so the UI can detect a missing-key situation. */
export class MissingApiKeyError extends Error {
  constructor() {
    super('MISSING_OPENAI_KEY')
    this.name = 'MissingApiKeyError'
  }
}

/**
 * Generates a trip itinerary.
 * - When VITE_OPENAI_API_KEY is set, calls the real OpenAI Chat Completions API.
 * - When the key is absent, throws MissingApiKeyError so the caller can gate.
 */
export async function generateTrip(prompt, days = DEFAULT_TRIP_DAYS) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  if (!apiKey) {
    throw new MissingApiKeyError()
  }

  const model = import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo'
  const systemPrompt =
    `You are an expert travel planner. Given a destination and number of days, ` +
    `write a concise day-by-day itinerary. Format each line as "Day N: <activity>".`

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `${prompt} (${days} days)` },
      ],
      max_tokens: 600,
      temperature: 0.7,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `OpenAI request failed (${res.status})`)
  }

  const data = await res.json()
  const plan = data.choices?.[0]?.message?.content?.trim() || 'No plan returned.'
  return { plan }
}

/**
 * Template-based fallback (used only on the Setup preview and tests).
 * Not exposed in the main flow — real AI is required for production use.
 */
export function generateTripTemplate(prompt, days = DEFAULT_TRIP_DAYS) {
  const destination = prompt.replace(/^Plan a trip to\s*/i, '').trim() || 'your destination'
  const plan = Array.from({ length: days }, (_, i) => {
    const activity = ITINERARY_TEMPLATES[i % ITINERARY_TEMPLATES.length]
    return `Day ${i + 1}: ${activity}`
  }).join('\n')
  return { plan: `🌍 Trip to ${destination}\n\n${plan}\n\nHave a wonderful journey!` }
}
