export function buildFlightLink(origin, dest, start, end) {
  const base = 'https://www.google.com/travel/flights';
  const params = new URLSearchParams({
    f: origin,
    t: dest,
    d: start,
    r: end,
  });
  return `${base}?${params.toString()}`;
}
