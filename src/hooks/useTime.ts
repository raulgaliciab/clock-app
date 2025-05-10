import { useEffect, useState } from 'react';
import { TimeApiResponse } from '../types/TimeApiResponse';
import { getTimeAPI } from '../utils/getTime';

export const useTime = () => {

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

  return { currentTime, timeData };
}
