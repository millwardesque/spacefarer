import React from 'react';
import { formatAsPercentage } from '../../utils';

interface ProgressBarProps {
  label?: string;
  max?: number;
  value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  max = 1.0,
  value,
}) => {
  if (max === 0) {
    console.error(`Max value for progress bar '${label}' is 0.`); // @DEBUG
    return null;
  }

  const asPercentage = formatAsPercentage(value / max);
  return (
    <div>
      {label && (
        <strong>
          {label}&nbsp;
          <small>({asPercentage})</small>
        </strong>
      )}
      &nbsp;
      <progress value={value} max={max} />
    </div>
  );
};
