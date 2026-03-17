# Quorum — Multi-LLM Deliberation Council

> Ask your hardest questions. Watch real AI models debate each other. One chairman delivers the verdict.

**[Live Demo →](https://harryz1995.github.io/quorum/quorum-groq.html)**

---

## What is Quorum?

Most people ask one AI one question and accept the answer. Quorum does something different — it runs a structured 3-stage deliberation across multiple AI models, then synthesizes the single best possible answer.

| Stage | What happens |
|-------|-------------|
| 01 · Opinions | Each model answers independently — no knowledge of other responses |
| 02 · Peer Review | Each model reviews the others **anonymously** — no identity bias |
| 03 · Verdict | A designated Chairman synthesizes everything into one definitive answer |

The anonymous peer review is the key mechanism. When models don't know who wrote what, they actually disagree. They'll contradict GPT-4o if it's wrong. They won't if they know it's GPT-4o.

---

## Two Tiers

### Free Tier — Groq ⭐
Real open-weight models, zero cost, no credit card.

| Model | Org | Best for |
|-------|-----|---------|
| Llama 4 Maverick | Meta | All-round, best chairman |
| Kimi K2 (1T params) | Moonshot AI | Hard analytical problems |
| Qwen3 32B | Alibaba | Step-by-step reasoning |
| GPT-OSS 120B | OpenAI | Strong synthesis |
| DeepSeek R1 | DeepSeek | Logic & math |
| Llama 3.3 70B | Meta | Reliable, battle-tested |

**Setup:** Free key at [console.groq.com](https://console.groq.com) → API Keys

---

### Premium Tier — OpenRouter
The real models your audience knows — GPT-4o, Claude, Gemini, Grok.

| Model | Org | Best for |
|-------|-----|---------|
| GPT-4o | OpenAI | Best all-rounder, excellent chairman |
| Claude Sonnet 4.5 | Anthropic | Nuanced reasoning, honest analysis |
| Gemini 2.0 Flash | Google | Fast, factual, strong grounding |
| Grok-3 | xAI | Bold, contrarian, challenges consensus |
| DeepSeek R1 | DeepSeek | Chain-of-thought reasoning |
| Llama 4 Maverick | Meta | Best open-weight model |

**Setup:** Key at [openrouter.ai/keys](https://openrouter.ai/keys) + Cloudflare Worker proxy (~$0.01–0.05 per session)

---

## Quick Start

### Groq (Free — recommended to start)
1. Get a free key at [console.groq.com](https://console.groq.com) → API Keys
2. Open `quorum-groq.html` in your browser
3. Enter key → click **Load Models**
4. Click **⭐ Best Council** to auto-pick the optimal combination
5. Ask your question → **Convene**

Total setup: under 3 minutes.

### OpenRouter (Premium — GPT-4o, Claude, Gemini, Grok)

**Step 1: Deploy the Cloudflare Worker** (free CORS proxy, 5 minutes)
1. Go to [workers.cloudflare.com](https://workers.cloudflare.com) → Create a Worker
2. Delete default code → paste `quorum-proxy-worker.js`
3. Save and Deploy → copy your worker URL

**Step 2: Get an OpenRouter key**
1. Sign up at [openrouter.ai](https://openrouter.ai) → add $5 credits
2. Create a key starting with `sk-or-v1-...`

**Step 3: Use it**
1. Open `quorum-groq.html` → click the **OpenRouter** tab
2. Paste your key + Worker URL → Load Models
3. Select GPT-4o, Claude, Gemini, Grok → Convene

---

## Choosing Your Council

**Best combinations:**

| Goal | Council | Chairman |
|------|---------|----------|
| Best all-round debate | GPT-4o + Claude Sonnet + Gemini Flash + Grok-3 | GPT-4o or Claude |
| Hard reasoning | Kimi K2 + DeepSeek R1 + Qwen3 + Llama 4 | Kimi K2 |
| Career / strategy decisions | GPT-4o + Claude + Grok-3 + Llama 4 | Claude Sonnet |
| Zero cost, strong quality | Llama 4 Maverick + Kimi K2 + Qwen3 + GPT-OSS | Kimi K2 |

**Chairman by question type:**
- Philosophy / ethics → Claude Sonnet or GPT-4o
- Logic / math / analysis → Kimi K2 or DeepSeek R1
- Strategy / business → GPT-4o or Qwen3
- Bold contrarian take → Grok-3

---

## Verdict Styles

| Style | Best for |
|-------|---------|
| Balanced synthesis | General questions — weaves all insights together |
| Decisive verdict | Debates — picks the strongest position and defends it |
| Structured breakdown | Complex questions — consensus, disagreements, final answer |
| Contrarian challenge | Controversial topics — steelmans the minority view first |
| Sharp & concise | Quick answers — three paragraphs max |

---

## Why It Works

**Single-model AI has 3 structural weaknesses:**
1. **Blind spots** — training biases that go unchallenged
2. **Overconfidence** — no external pressure to flag uncertainty  
3. **No adversarial testing** — the answer is never cross-examined

Quorum's anonymous peer review fixes all three. By hiding model identities during review, it prevents sycophancy and forces genuine critical engagement.

---

## Tech Stack

| Component | Detail |
|-----------|--------|
| Frontend | Pure HTML + CSS + Vanilla JS — no framework, no build step |
| Free tier | Groq API — CORS-enabled, open-weight models |
| Premium tier | OpenRouter API — GPT-4o, Claude, Gemini, Grok |
| CORS proxy | Cloudflare Worker — free, 100k requests/day |
| Deployment | Single HTML file — open locally or host anywhere |

No backend. No database. No installation.

---

## Project Structure

```
quorum/
├── quorum-groq.html          # Main app (Groq free + OpenRouter premium)
├── quorum-ollama.html        # Local version (Ollama, 100% offline)
├── quorum-proxy-worker.js    # Cloudflare Worker for OpenRouter CORS
└── README.md
```

---

## Ollama Version (100% Offline)

For complete privacy with no data leaving your machine:

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull models (mix families for best debates)
ollama pull llama3.1
ollama pull mistral
ollama pull gemma2
ollama pull phi3

# Start with CORS enabled
OLLAMA_ORIGINS="*" ollama serve
# Windows: $env:OLLAMA_ORIGINS="*"; ollama serve
```

Then open `quorum-ollama.html` — auto-detects installed models.

---

## Inspiration

Inspired by [karpathy/llm-council](https://github.com/karpathy/llm-council) — reimagined as a zero-dependency single HTML file with free and premium cloud model access.

---

## Author

**Rama Hari Nandan Munaga** · Product Manager  
[LinkedIn](https://linkedin.com/in/hari-nandan-munagala-2b995a1b) · [GitHub](https://github.com/harryz1995) · harryz1995@gmail.com

---

*Zero backend. Zero build tools. Two tiers: completely free to start, real GPT-4o vs Claude vs Gemini vs Grok when you're ready.*
