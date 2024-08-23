import { addMinutes } from "date-fns";

export function addMinutesToDate(date: Date, minutes: number) {
  const newDate = addMinutes(date, minutes);
  const durationMs = newDate.getTime() - date.getTime();

  return { newDate, durationMs };
}
