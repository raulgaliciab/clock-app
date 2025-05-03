export const formatTime = (date:Date | null):string => {
  if (!date) return '--:--';

  const hours:string = date.getHours().toString().padStart(2, '0');
  const minutes:string = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}