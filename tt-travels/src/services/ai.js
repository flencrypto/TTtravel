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

export async function generateTrip(prompt, days = DEFAULT_TRIP_DAYS) {
  const destination = prompt.replace(/^Plan a trip to\s*/i, '').trim() || 'your destination'
  const plan = Array.from({ length: days }, (_, i) => {
    const activity = ITINERARY_TEMPLATES[i % ITINERARY_TEMPLATES.length]
    return `Day ${i + 1}: ${activity}`
  }).join('\n')

  return {
    plan: `🌍 Trip to ${destination}\n\n${plan}\n\nHave a wonderful journey!`,
  }
}
