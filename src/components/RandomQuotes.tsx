import { RandomQuotesProps } from "../types/RandomQuoteProps"

export const RandomQuotes = ({ quote, onFetch }: RandomQuotesProps) => {
  return (
    <section className="random-quotes">
      <p>
        <q>{ quote?.quote ?? "Loading quote..." }</q>
        <cite>{ quote?.author ?? "" }</cite>
      </p>
      <button
        type="button"
        onClick={ onFetch }
        aria-label="Refresh quote"
      >
        <img
          src="/assets/desktop/icon-refresh.svg"
          alt="Refresh button"
        />
      </button>
    </section>
  )
}
