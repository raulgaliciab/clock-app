import { ButtonExpansion } from './ButtonExpansion';
import { ExpandedInfo } from './ExpandedInfo';
import { useTime } from '../hooks/useTime';
import { useState } from 'react';
import { formatTime } from '../utils/formatTime';
import { getGreeting } from '../utils/getGreeting';

export const Time = () => {

  const { currentTime, timeData } = useTime();
  const [ isExpanded, setIsExpanded ] = useState(false);

  const formattedTime = formatTime(currentTime);
  const greeting = getGreeting(currentTime);

  const toggleExpanded = () => setIsExpanded(prev => !prev);

  return (
    <section>
      <span>
        <img src="/assets/desktop/icon-sun.svg" alt="Sun Icon" />
        GOOD {greeting}, IT'S CURRENTLY
      </span>
      <p>{formattedTime} <span>{timeData?.abbreviation ?? ''}</span></p>
      <span>IN LONDON, UK</span>

      <ButtonExpansion isExpanded={isExpanded} onToggle={toggleExpanded}/>

      { isExpanded && <ExpandedInfo timeData={timeData}/>}
    </section>
  )
}