// Quorum — OpenRouter CORS Proxy
// Deploy this to Cloudflare Workers (free tier: 100k requests/day)
//
// Deploy steps:
// 1. Go to https://workers.cloudflare.com → Sign up free
// 2. Click "Create a Worker"
// 3. Delete the default code and paste this entire file
// 4. Click "Save and Deploy"
// 5. Copy your worker URL (e.g. https://quorum-proxy.YOUR-NAME.workers.dev)
// 6. Paste it into quorum-groq.html where it says WORKER_URL

export default {
  async fetch(request) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, HTTP-Referer, X-Title',
        }
      });
    }

    // Only allow POST to OpenRouter
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();
      const authHeader = request.headers.get('Authorization') || '';

      // Forward to OpenRouter
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader,
          'HTTP-Referer': 'https://harryz1995.github.io/quorum',
          'X-Title': 'Quorum Multi-LLM Council',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: { message: err.message } }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
    }
  }
};
