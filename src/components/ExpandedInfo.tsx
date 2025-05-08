import { ExpandedInfoProps } from '../types/ExpandedInfoProps';


export const ExpandedInfo = ({timeData}:ExpandedInfoProps) => {
  return (
    <section className='expanded-info'>
      <section className='info-container'>
        <p className='label'>CURRENT TIMEZONE</p>
        <p className='info'>{timeData?.timezone.replace("_", " ")}</p>
      </section>
      <section className='info-container'>
        <p className='label'>DAY OF THE YEAR</p>
        <p className='info'>{timeData?.day_of_year}</p>
      </section>
      <section className='info-container'>
        <p className='label'>DAY OF THE WEEK</p>
        <p className='info'>{timeData?.day_of_week}</p>
      </section>
      <section className='info-container'>
        <p className='label'>WEEK NUMBER</p>
        <p className='info'>{timeData?.week_number}</p>
      </section>
    </section>
  )
}
