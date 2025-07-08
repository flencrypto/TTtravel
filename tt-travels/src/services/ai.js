const API_KEY = import.meta.env.VITE_OPENAI_KEY;

export async function generateTrip(prompt) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    })
  });
  if (!res.ok) throw new Error('AI request failed');
  const data = await res.json();
  return data.choices?.[0]?.message?.content;
}
