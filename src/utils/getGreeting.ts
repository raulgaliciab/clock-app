export const getGreeting = (currentTime:Date | null):string => {

  if (!currentTime) return '';

  const hour:number = currentTime.getHours();

  if (hour >= 5 && hour <= 12) {
    return 'MORNING';
  } else if (hour > 12 && hour < 18) {
    return 'AFTERNOON';
  } else {
    return 'EVENING';
  }
}