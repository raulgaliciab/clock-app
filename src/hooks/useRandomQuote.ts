import { useEffect, useState } from 'react';
import { RandomQuotesApiResponse } from '../types/RandomQuoteApiResponse';
import { getRandomQuote } from '../utils/getRandomQuote';

export const useRandomQuote = () => {
  const [ quote, setQuote ] = useState<RandomQuotesApiResponse | null>(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  const fetchQuote = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null)

    try {
      const data = await getRandomQuote();
      setQuote(data);
    }

    catch (err) {
      setError("Error fetching quote.");
      console.error(err)
    }

    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return {
    quote,
    fetchQuote,
    isLoading,
    error
  }
}