import { useEffect } from 'react';
import { getTimeAPI } from '../utils/getTime';

export const Time = () => {

  useEffect(() => {
    getTimeAPI().then( data => {
      console.log(data);
    })
    .catch( err => {
      console.error(err)
    })
  });

  return (
    <section>
      <span>
        <img src="/assets/desktop/icon-sun.svg" alt="Sun Icon" />
        GOOD MORNING, IT'S CURRENTLY
      </span>
      <p>11:37 <span>BST</span></p>
      <span>IN LONDON, UK</span>
    </section>
  )
}