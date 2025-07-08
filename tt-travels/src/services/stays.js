export function buildAirbnbLink(location, start, end) {
  const base = `https://www.airbnb.com/s/${encodeURIComponent(location)}/homes`;
  const params = new URLSearchParams({ checkin: start, checkout: end });
  return `${base}?${params.toString()}`;
}
