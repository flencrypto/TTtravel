const API_KEY = 'YOUR_GEOAPIFY_KEY'

export async function getEvents(lat, lng) {
  const url = `https://api.geoapify.com/v2/events?lat=${lat}&lon=${lng}&apiKey=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('events fetch failed')
  return res.json()
}
