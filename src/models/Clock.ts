import { eventTrigger } from '../events';
import { normalizeTime, Time } from './Time';

function triggerTimeChange(timeDelta: Time): void {
  eventTrigger('clock:time-change', {
    detail: {
      timeDelta,
    },
  });
}

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

    triggerTimeChange({ hours: 1, days: 0, years: 0 });
  }

  addDay() {
    this.time.days += 1;
    this.normalize();

    triggerTimeChange({ hours: 0, days: 1, years: 0 });
  }

  addYear() {
    this.time.years += 1;
    this.normalize();

    triggerTimeChange({ hours: 0, days: 0, years: 1 });
  }

  normalize() {
    this.time = normalizeTime(this.time);
  }
}
