import { ButtonExpansion } from './ButtonExpansion';
import { ExpandedInfo } from './ExpandedInfo';
import { useTime } from '../hooks/useTime';
import { useState } from 'react';
import { formatTime } from '../utils/formatTime';
import { getGreeting } from '../utils/getGreeting';
import { RandomQuotes } from './RandomQuotes';
import { useRandomQuote } from '../hooks/useRandomQuote';
import { useLocation } from '../hooks/useLocation';

export const Time = () => {

  const { currentTime, timeData } = useTime();
  const { location } = useLocation();
  const { quote, fetchQuote } = useRandomQuote();
  const [ isExpanded, setIsExpanded ] = useState(false);

  const formattedTime = formatTime(currentTime);
  const greeting = getGreeting(currentTime);
  const themeMode = (greeting === 'morning' || greeting === 'afternoon') ? 'sun' : 'moon';

  const toggleExpanded = () => setIsExpanded(prev => !prev);

  return (
    <section className={`time ${ themeMode }`}>

      { !isExpanded && <RandomQuotes quote={quote} onFetch={fetchQuote}/>}

      <section className='clock'>
        <span className='greeting'>
          <img
            src={`/assets/desktop/icon-${ themeMode }.svg`}
            alt="Day Icon"
          />
          GOOD { greeting.toUpperCase() }
        </span>
        <div className='main-hour'>
          <p>{ formattedTime }</p>
          <span>{ timeData?.abbreviation ?? '' }</span>
        </div>
        <span className='location'>IN { `${location?.city.toUpperCase()}, ${location?.country}` }</span>

      <ButtonExpansion isExpanded={ isExpanded } onToggle={ toggleExpanded }/>
      </section>


      { isExpanded && <ExpandedInfo timeData={ timeData }/>}
    </section>
  )
}