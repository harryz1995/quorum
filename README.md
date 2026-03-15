# Quorum — Multi-LLM Council

> *Ask your hardest questions. Watch real AI models debate each other. Get one definitive answer.*

Quorum sends your question to multiple LLMs simultaneously, has them anonymously peer-review each other's responses, then a designated Chairman synthesizes everything into the single best possible answer.

![Three stages: opinions → peer review → verdict](https://img.shields.io/badge/stages-3-gold) ![Zero backend](https://img.shields.io/badge/backend-none-green) ![Free](https://img.shields.io/badge/cost-free-brightgreen)

---

## How it works

**Stage 1 — Initial opinions**
Each model answers independently. You can read every response side by side in a tab view.

**Stage 2 — Peer review**
Each model reviews the others' responses anonymously (identities hidden to prevent bias) and ranks them.

**Stage 3 — Chairman's verdict**
Your chosen Chairman model synthesizes everything — incorporating the strongest insights, resolving contradictions, and delivering the definitive final answer.

---

## Two versions

### `quorum-groq.html` — Cloud version ⭐ Recommended
- **Real different models**: Llama 3.3 70B, Mixtral 8x7B, Gemma 2 9B, DeepSeek R1, and more
- **Fast**: 2–3 second responses per model
- **Free**: Groq's free tier, no credit card required
- **Remote**: Works anywhere, any browser, any device
- **Setup**: Just get a free API key at [console.groq.com](https://console.groq.com)

### `quorum-ollama.html` — Local version
- **100% offline**: Runs entirely on your machine, no data leaves
- **Truly free forever**: No API keys, no rate limits
- **Real models**: Llama, Mistral, Gemma, DeepSeek, Phi, Qwen — whatever you have installed
- **Live streaming**: Watch models think in real time
- **Setup**: Requires [Ollama](https://ollama.com) installed locally

---

## Quick Start

### Groq version
1. Get a free API key at [console.groq.com](https://console.groq.com) → API Keys
2. Open `quorum-groq.html` in your browser
3. Enter your key, select 2–4 models, pick a chairman
4. Ask anything

### Ollama version
```bash
# 1. Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 2. Pull some models (mix families for best debates)
ollama pull llama3.1
ollama pull mistral
ollama pull gemma2
ollama pull phi3

# 3. Start with CORS enabled
OLLAMA_ORIGINS="*" ollama serve
# Windows: $env:OLLAMA_ORIGINS="*"; ollama serve
```
Then open `quorum-ollama.html` in your browser.

---

## Choosing your council

**Best debate combos (Groq):**
| Goal | Models |
|------|--------|
| General questions | Llama 3.3 70B + Mixtral 8x7B + Gemma 2 9B |
| Hard reasoning | DeepSeek R1 + Llama 3.3 70B + Qwen QwQ |
| Fast debates | Llama 3.1 8B + Gemma 2 9B + Mixtral 8x7B |

**Chairman recommendations:**
- `DeepSeek R1` — best for logical/analytical questions
- `Llama 3.3 70B` — best for nuanced synthesis
- `Mixtral 8x7B` — best for decisive verdicts

**Verdict styles:**
| Style | Best for |
|-------|----------|
| Balanced synthesis | Most questions |
| Decisive verdict | Debates, opinion questions |
| Structured breakdown | Complex multi-part questions |
| Contrarian challenge | Controversial topics |
| Sharp & concise | When you want a quick definitive answer |

---

## Tech stack

- **Pure HTML/CSS/JS** — zero dependencies, no build step, no framework
- **Groq API** — OpenAI-compatible REST API with CORS support
- **Ollama** — local model server with streaming API
- Single file per version — open and run, nothing to install

---

## Why "Quorum"?

A quorum is the minimum number of members needed for a deliberative assembly to make decisions. The name reflects the core idea: multiple voices, one verdict.

---

## Inspiration

Inspired by [karpathy/llm-council](https://github.com/karpathy/llm-council) — simplified to a zero-dependency single HTML file with real free model access.

---

*Built with no backend, no build tools, and no API costs.*
