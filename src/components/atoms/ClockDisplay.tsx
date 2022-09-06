import React from 'react';

import { Clock } from '../../models/Clock';

interface ClockDisplayProps {
  clock: Clock;
}

export const ClockDisplay: React.FC<ClockDisplayProps> = ({
  clock: { time },
}) => {
  return (
    <span>
      {time.years}y, {time.days}d, {time.hours}h
    </span>
  );
};
