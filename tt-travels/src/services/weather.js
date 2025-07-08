const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export async function getWeather(lat, lon) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if (!res.ok) throw new Error('Weather fetch failed');
  return res.json();
}
