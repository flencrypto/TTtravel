export async function generateTrip(prompt) {
  // Placeholder for AI call
  const response = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  })
  if (!response.ok) throw new Error('AI request failed')
  return response.json()
}
