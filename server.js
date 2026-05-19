import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';
import { config } from 'dotenv';

config();

const app  = express();
const port = 3001;

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173', 'https://portfolio-app-two-beige-77.vercel.app'] }));
app.use(express.json());

const anthropic = new Anthropic({ apiKey: process.env.VITE_ANTHROPIC_API_KEY });

app.post('/api/anthropic', async (req, res) => {
  try {
    const { system, user, tools } = req.body;
    const response = await anthropic.messages.create({
      model:      'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system,
      tools:      tools || [{ type: 'web_search_20250305', name: 'web_search' }],
      messages:   [{ role: 'user', content: user }],
    });

    // Extract text blocks only
    const text = response.content
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('');

    res.json({ text });
  } catch (err) {
    console.error('Anthropic API error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`✅ Proxy running on http://localhost:${port}`));
