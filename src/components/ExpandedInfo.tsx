import { ExpandedInfoProps } from '../types/ExpandedInfoProps';


export const ExpandedInfo = ({timeData}:ExpandedInfoProps) => {
  return (
    <section>
      <section>
        <p>CURRENT TIMEZONE</p>
        <p>{timeData?.timezone}</p>
      </section>
      <section>
        <p>DAY OF THE YEAR</p>
        <p>{timeData?.day_of_year}</p>
      </section>
      <section>
        <p>DAY OF THE WEEK</p>
        <p>{timeData?.day_of_week}</p>
      </section>
      <section>
        <p>WEEK NUMBER</p>
        <p>{timeData?.week_number}</p>
      </section>
    </section>
  )
}
