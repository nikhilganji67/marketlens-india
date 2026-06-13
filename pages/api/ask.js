export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt, context } = req.body;
  if (!prompt) return res.status(400).json({ error: 'prompt required' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: `You are MarketLens India, an elite equity research AI for Indian markets. You have deep expertise in NSE/BSE listed stocks, sector rotation, FII/DII flows, technical analysis, fundamental valuation (PE, PEG, DCF), and global emerging market correlations. You speak like a seasoned fund manager — sharp, data-driven, no fluff. Always reference specific numbers when available. Format responses with clear headers using **bold** and bullet points. Use ₹ symbol for Indian rupees. Keep responses concise but high-signal. Context data: ${context || ''}`,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || 'No response';
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
