import { ButtonExpansion } from './ButtonExpansion';
import { ExpandedInfo } from './ExpandedInfo';
import { useTime } from '../hooks/useTime';
import { useState } from 'react';

export const Time = () => {

  const { currentTime, timeData } = useTime();
  const [ isExpanded, setIsExpanded ] = useState(false);

  const formattedTime = currentTime
    ? `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`
    : '--:--';

  const toggleExpanded = () => setIsExpanded(prev => !prev);

  return (
    <section>
      <span>
        <img src="/assets/desktop/icon-sun.svg" alt="Sun Icon" />
        GOOD MORNING, IT'S CURRENTLY
      </span>
      <p>{formattedTime} <span>{timeData?.abbreviation ?? ''}</span></p>
      <span>IN LONDON, UK</span>

      <ButtonExpansion isExpanded={isExpanded} onToggle={toggleExpanded}/>

      { isExpanded && <ExpandedInfo/>}
    </section>
  )
}