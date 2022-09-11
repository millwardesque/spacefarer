import React from 'react';

import { Clock } from '../../models/Clock';

interface ClockDisplayProps {
  clock: Clock;
}

export const ClockDisplay: React.FC<ClockDisplayProps> = ({
  clock: { time },
}) => {
  return (
    <strong>
      Date: {time.years}y, {time.days}d, {time.hours}h
    </strong>
  );
};
