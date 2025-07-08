const API_KEY = 'YOUR_OPENWEATHER_KEY'

export async function getWeather(lat, lng) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('weather fetch failed')
  return res.json()
}
