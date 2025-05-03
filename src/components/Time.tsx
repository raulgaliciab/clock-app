import { ButtonExpansion } from './ButtonExpansion';
import { ExpandedInfo } from './ExpandedInfo';
import { useTime } from '../hooks/useTime';

export const Time = () => {

  const { currentTime, timeData } = useTime();

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