import { addMinutes } from "date-fns";

export function minutesToMs(minutes: number) {
  const durationMs = minutes * 60 * 1000;
  return durationMs;
}

export function addMinutesToDate(date: Date, minutes: number) {
  const newDate = addMinutes(date, minutes);
  return newDate;
}
