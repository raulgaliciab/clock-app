import { RandomQuotesApiResponse } from './RandomQuoteApiResponse';

export type RandomQuotesProps = {
  quote: RandomQuotesApiResponse | null;
  onFetch: () => void;
}