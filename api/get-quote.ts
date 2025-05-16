export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const API_URL = process.env.QUOTES_API_URL!;
  const API_KEY = process.env.QUOTES_API_KEY!;

  const response = await fetch(API_URL, {
    headers: {
      'X-Api-Key': API_KEY
    }
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch quote' }), {
      status: response.status,
    });
  }

  const data = await response.json();

  return new Response(JSON.stringify({
    author: data[0].author,
    quote: data[0].quote
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
