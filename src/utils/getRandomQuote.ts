import { RandomQuotesApiResponse } from '../types/RandomQuoteApiResponse';

export const getRandomQuote = async () :Promise<RandomQuotesApiResponse> => {
  const API_URL:string = import.meta.env.VITE_QUOTES_URL;
  const API_KEY:string = import.meta.env.VITE_QUOTES_API_KEY;

  const apiRes:Response = await fetch(API_URL, {
    headers: {
      "X-Api-Key": API_KEY
    },
  });

  if (!apiRes.ok) {
    throw new Error(`Error fetching quote: ${apiRes.status}`)
  }

  const data = await apiRes.json();

  return {
    "author": data[0].author,
    "quote": data[0].quote
  };
}