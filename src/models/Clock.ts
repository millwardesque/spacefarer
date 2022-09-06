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
  }

  addDay() {
    this.time.days += 1;
    this.normalize();
  }

  addYear() {
    this.time.years += 1;
    this.normalize();
  }

  normalize() {
    this.time = normalizeTime(this.time);
  }
}
