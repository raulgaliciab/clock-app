import { useEffect, useState } from 'react';
import { getTimeAPI } from '../utils/getTime';
import { TimeApiResponse } from '../types/TimeApiResponse';
import { ButtonExpansion } from './ButtonExpansion';
import { ExpandedInfo } from './ExpandedInfo';

export const Time = () => {

  const [ timeData, setTimeData ] = useState<TimeApiResponse | null >(null);
  const [ currentTime, setCurrentTime ] = useState<Date | null>(null);

  // Get time API
  useEffect( () => {
    getTimeAPI()
      .then( data => {
        setTimeData(data)
        setCurrentTime(new Date(data.datetime));
      })
      .catch(err => {
        console.error(err)
      })

  }, []);

  // Starts internal clock
  useEffect( () => {
    if(!currentTime) return;

    const interval = setInterval(() => {
      setCurrentTime(prev => prev ? new Date(prev.getTime() + 60_000) : null);
    }, 60_000);

    return () => clearInterval(interval)
  }, [currentTime]);

  const formattedTime = currentTime
    ? `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`
    : '--:--';

  return (
    <section>
      <span>
        <img src="/assets/desktop/icon-sun.svg" alt="Sun Icon" />
        GOOD MORNING, IT'S CURRENTLY
      </span>
      <p>{formattedTime} <span>{timeData?.abbreviation ?? ''}</span></p>
      <span>IN LONDON, UK</span>

      <ButtonExpansion/>

      <ExpandedInfo/>
    </section>
  )
}