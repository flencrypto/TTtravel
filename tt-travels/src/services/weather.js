export async function getWeather(lat, lng, unit = 'metric') {
  const tempUnit = unit === 'imperial' ? 'fahrenheit' : 'celsius'
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode&temperature_unit=${tempUnit}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('weather fetch failed')
  const data = await res.json()
  return { main: { temp: data.current.temperature_2m }, unit }
}
