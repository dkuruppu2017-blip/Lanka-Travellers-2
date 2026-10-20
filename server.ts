import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Google GenAI client with required User-Agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// System Prompt for Lanka Travellers Ceylon Travel Concierge
const CONCIERGE_SYSTEM_INSTRUCTION = `You are Chaminda Silva, Senior Travel Custodian and Itinerary Architect at Lanka Travellers Ceylon (Official SLTDA Licensed DMC #SLTDA/SQA/TA/01482 based in Colombo 03, Sri Lanka).
You possess deep native intuition on Sri Lanka travel, weather patterns (monsoons in northeast vs southwest), Geoffrey Bawa tropical modernist architecture, boutique tea bungalows, ethical wildlife encounters (Yala, Minneriya, Udawalawe), and unhurried pacing.

When travelers ask questions or request an itinerary:
1. Provide thoughtful, well-reasoned recommendations that prioritize comfort, low driving fatigue, and high authenticity.
2. Outline recommended route stops, driving durations (e.g. Colombo to Sigiriya: 3.5 hrs via Central Expressway; Sigiriya to Kandy: 2.5 hrs; Kandy to Nuwara Eliya: 2.5 hrs; Nuwara Eliya to Ella: 2.5 hrs scenic train; Ella to Yala: 2 hrs; Yala to Galle: 2.5 hrs via Southern Expressway).
3. Recommend handpicked boutique heritage properties (e.g. Heritance Kandalama by Geoffrey Bawa, Ceylon Tea Trails, 98 Acres Resort Ella, Fort Printers Galle).
4. Clearly state meal recommendations (fresh king coconut, hoppers, clay-pot village curries) and ethical wildlife guidelines (no elephant riding, ethical observation).
5. Format your response cleanly with clear section headings, estimated pacing, and bullet points.
Always maintain a warm, welcoming, hospitable Sri Lankan tone ("Ayubowan") with high architectural and cultural refinement.`;

// POST /api/concierge endpoint using gemini-4-argon with ThinkingLevel.HIGH
app.post('/api/concierge', async (req, res) => {
  try {
    const prompt = req.body.prompt || req.body.message;
    const conversationHistory = req.body.conversationHistory || [];

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Build contents with history if available
    const contents: any[] = [];
    for (const msg of conversationHistory) {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      });
    }
    contents.push({
      role: 'user',
      parts: [{ text: prompt }],
    });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: 'Gemini API key is not configured. Please configure GEMINI_API_KEY in the Secrets panel.',
      });
    }

    // Call gemini-4-argon with ThinkingLevel.HIGH as mandated
    const response = await ai.models.generateContent({
      model: 'gemini-4-argon',
      contents: contents.length === 1 ? prompt : contents,
      config: {
        systemInstruction: CONCIERGE_SYSTEM_INSTRUCTION,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH,
        },
        // Note: do NOT set maxOutputTokens per instructions
      },
    });

    const replyText = response.text || 'Ayubowan! I am preparing your personalized Ceylon journey recommendations.';

    return res.json({
      text: replyText,
      model: 'gemini-4-argon',
      thinkingLevel: 'HIGH',
    });
  } catch (error: any) {
    console.error('Gemini API Error (falling back to native expert advice):', error?.message);
    
    // Provide comprehensive fallback response so traveler experience is uninterrupted
    const promptLower = (req.body.prompt || req.body.message || '').toLowerCase();
    let advice = `Ayubowan! Based on your inquiry, here is our recommended Ceylon journey blueprint:

1. Recommended Route & Pacing:
• Colombo Airport BIA ➔ Cultural Triangle (Sigiriya & Dambulla) via Central Expressway (3.5 hours).
• Cultural Triangle ➔ Sacred City of Kandy via Matale Spice Groves (2.5 hours).
• Kandy ➔ Nuwara Eliya & Ella via Scenic Main Line Blue Mountain Train (3.5 hours).
• Central Highlands ➔ Yala National Park & Southern Coast (Galle Fort) via Southern Expressway (2.5 hours).

2. Handpicked Heritage Accommodations:
• Heritance Kandalama (Geoffrey Bawa architectural masterwork immersed in cliffside jungle).
• Ceylon Tea Trails / 98 Acres Resort Ella (Bespoke tea planter bungalows with private plunge pools).
• Fort Printers or Amangalla (17th-century Dutch colonial luxury in UNESCO Galle Fort).

3. Chauffeur Guide & Logistics:
• Private air-conditioned luxury van with SLTDA-certified English/multilingual chauffeur guide.
• 100% tailor-made flexibility: private pacing, unhurried photo stops, and skip-the-line temple tickets.

You can customize this route or submit your dates directly through our Custom Trip Planner!`;

    if (promptLower.includes('honeymoon') || promptLower.includes('couple')) {
      advice = `Ayubowan! For an intimate Ceylon Honeymoon & Romance escape:

1. Secluded Villa Highlights:
• 3 Nights in Central Highlands: Private tea bungalow with heated infinity pool overlooking mist-clad valleys in Ella.
• 4 Nights along Southern Coast: Private beach pool villa in Tangalle / Mirissa with candlelit seafood dining under coconut palms.

2. Signature Romantic Experiences:
• Private sunrise champagne breakfast overlooking the Nine Arch Bridge.
• Private catamaran whale watching cruise off Mirissa with onboard tropical fruit platters.
• Traditional Ayurvedic couple's floral bath and full-body herbal massage.

3. Complete Peace of Mind:
• Dedicated luxury Mercedes/Toyota hybrid chauffeur guide throughout.
• 24/7 on-trip concierge assistance and zero-trace eco standards.`;
    }

    return res.json({
      text: advice,
      model: 'gemini-4-argon',
      thinkingLevel: 'HIGH',
      isFallback: true,
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', agency: 'Lanka Travellers Ceylon', timestamp: new Date().toISOString() });
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    // In dev mode, mount Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve built dist directory
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Lanka Travellers server running on port ${PORT}`);
  });
}

startServer();
