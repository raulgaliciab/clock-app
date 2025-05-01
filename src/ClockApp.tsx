import { ButtonExpansion } from './components/ButtonExpansion';
import { ExpandedInfo } from './components/ExpandedInfo';
import { RandomQuotes } from './components/RandomQuotes';
import { Time } from './components/Time';

function ClockApp() {

  return (
    <>
      <RandomQuotes/>

      <Time/>

      <ButtonExpansion/>

      <ExpandedInfo/>
    </>
  )
}

export default ClockApp;