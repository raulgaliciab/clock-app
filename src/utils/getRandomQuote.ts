import { RandomQuotesApiResponse } from '../types/RandomQuoteApiResponse';

export const getRandomQuote = async () :Promise<RandomQuotesApiResponse> => {

  const apiRes:Response = await fetch('/api/get-quote.ts');

  if (!apiRes.ok) {
    throw new Error(`Error fetching quote: ${apiRes.status}`)
  }

  const data = await apiRes.json();

  return {
    "author": data.author,
    "quote": data.quote
  };
}