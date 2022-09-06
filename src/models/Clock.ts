import { eventTrigger } from '../events';
import { normalizeTime, Time } from './Time';

export class Clock {
  time: Time;

  constructor(
    time: Time = {
      hours: 0,
      days: 0,
      years: 0,
    }
  ) {
    this.time = time;
  }

  addHour() {
    this.time.hours += 1;
    this.normalize();

    eventTrigger('clock:time-change', { hours: 1, days: 0, years: 0 } as Time);
  }

  addDay() {
    this.time.days += 1;
    this.normalize();

    eventTrigger('clock:time-change', { hours: 0, days: 1, years: 0 } as Time);
  }

  addYear() {
    this.time.years += 1;
    this.normalize();

    eventTrigger('clock:time-change', { hours: 0, days: 0, years: 1 } as Time);
  }

  normalize() {
    this.time = normalizeTime(this.time);
  }
}
