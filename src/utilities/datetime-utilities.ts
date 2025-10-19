export function setTimeStringOnDate(date: Date, timeString: string): Date {
  const [hoursStr, minutesStr, secondsStr] = timeString.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  const seconds = secondsStr ? parseInt(secondsStr, 10) : 0;

  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  date.setMilliseconds(0);

  return date;
}

export function timeStringToDate(date: Date, time: string): Date {
  const [hours, minutes, seconds] = time.split(':').map(Number);
//   const now = new Date();
  date.setHours(hours, minutes, seconds, 0); // Set to "14:30:00"
  return date;
}