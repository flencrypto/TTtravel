import { getWeather } from './weather'
import { getEvents } from './events'
import { generateTrip } from './ai'

export async function suggestActivities(lat, lng) {
  const [weather, events] = await Promise.all([
    getWeather(lat, lng),
    getEvents(lat, lng)
  ])

  const names = (events.features || [])
    .slice(0, 3)
    .map((e) => e.properties.name)
    .join(', ')

  const prompt = `Given the weather ${weather.weather[0].description} and these events: ${names}. Suggest three activities.`
  try {
    const res = await generateTrip(prompt)
    return res.plan || res
  } catch {
    return 'AI suggestion unavailable'
  }
}
