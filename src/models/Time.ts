import { HOURS_IN_DAY, DAYS_IN_YEAR } from '../constants';

export interface Time {
  hours: number;
  days: number;
  years: number;
}

export function timeToHours(time: Time): number {
  const hoursFromDays = time.days * HOURS_IN_DAY;
  const hoursFromYears = time.years * HOURS_IN_DAY * DAYS_IN_YEAR;
  return time.hours + hoursFromDays + hoursFromYears;
}

export function normalizeTime(time: Time): Time {
  const totalHours = time.hours;
  const normalizedHours = totalHours % HOURS_IN_DAY;
  const daysFromHours = Math.floor(totalHours / HOURS_IN_DAY);
  const totalDays = time.days + daysFromHours;
  const normalizedDays = totalDays % DAYS_IN_YEAR;
  const yearsFromDays = Math.floor(totalDays / HOURS_IN_DAY);
  const totalYears = time.years + yearsFromDays;

  return {
    hours: normalizedHours,
    days: normalizedDays,
    years: totalYears,
  };
}
