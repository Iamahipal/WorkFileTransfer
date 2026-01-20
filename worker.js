// Cloudflare Worker - Deploy this at workers.cloudflare.com
// This proxies requests to Telegram Bot API to bypass corporate firewalls

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    try {
      // Extract the Telegram API path from the request
      const url = new URL(request.url);
      const path = url.pathname;

      // Build the Telegram API URL
      const telegramUrl = `https://api.telegram.org${path}`;

      // Forward the request to Telegram
      const telegramRequest = new Request(telegramUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });

      // Get response from Telegram
      const response = await fetch(telegramRequest);

      // Clone the response and add CORS headers
      const modifiedResponse = new Response(response.body, response);
      modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
      modifiedResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      modifiedResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

      return modifiedResponse;

    } catch (error) {
      return new Response(JSON.stringify({
        ok: false,
        error: error.message,
        description: 'Proxy error - could not reach Telegram API'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
