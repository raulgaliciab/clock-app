# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I used](#what-i-used)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/raulgaliciab/clock-app)
- Live Site URL: [Vercel Deploy](https://clock-app-six-iota.vercel.app/)

## My process

### Built with

- [Vite](https://vite.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - JS Superset
- [React](https://reactjs.org/) - JS library
- [Mobile-first](https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First) workflow
- [SASS](https://sass-lang.com/) - CSS pre-processor
- CSS [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) and [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [Vercel](https://vercel.com/)

### What I used

#### Custom Hooks

Created custom hooks for handling each of the API's data responses.

```
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

```

#### Dynamic Features

The background and the greeting icon changes acording to the user's hour.

```
  const themeMode = (greeting === 'morning' || greeting === 'afternoon') ? 'sun' : 'moon';

  <img
    src={`/assets/desktop/icon-${ themeMode }.svg`}
    alt="Day Icon"
  />
```

#### Environment Variables

- Created and setted environment varibles for deployment on Vercel.
- Using local variables on Vite

## Author

- Raul Galicia
- GitHub - [@raulgaliciab](https://github.com/raulgaliciab)
- Frontend Mentor - [@raulgaliciab](https://www.frontendmentor.io/profile/raulgaliciab)
