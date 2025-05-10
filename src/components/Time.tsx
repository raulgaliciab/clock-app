import { ButtonExpansion } from './ButtonExpansion';
import { ExpandedInfo } from './ExpandedInfo';
import { useTime } from '../hooks/useTime';
import { useState } from 'react';
import { formatTime } from '../utils/formatTime';
import { getGreeting } from '../utils/getGreeting';
import { RandomQuotes } from './RandomQuotes';
import { useRandomQuote } from '../hooks/useRandomQuote';

export const Time = () => {

  const { currentTime, timeData } = useTime();
  const { quote, fetchQuote } = useRandomQuote();
  const [ isExpanded, setIsExpanded ] = useState(false);

  const formattedTime = formatTime(currentTime);
  const greeting = getGreeting(currentTime);

  const toggleExpanded = () => setIsExpanded(prev => !prev);

  return (
    <section className='time'>

      { !isExpanded && <RandomQuotes quote={quote} onFetch={fetchQuote}/>}

      <span className='greeting'>
        <img src="/assets/desktop/icon-sun.svg" alt="Sun Icon" />
        GOOD {greeting}
      </span>
      <div className='main-hour'>
        <p>{formattedTime}</p>
        <span>{timeData?.abbreviation ?? ''}</span>
      </div>
      <span className='location'>IN LONDON, UK</span>

      <ButtonExpansion isExpanded={isExpanded} onToggle={toggleExpanded}/>

      { isExpanded && <ExpandedInfo timeData={timeData}/>}
    </section>
  )
}