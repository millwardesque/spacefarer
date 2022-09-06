import React from 'react';

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
  return (
    <div>
      {label && <strong>{label}</strong>}&nbsp;
      <progress value={value} max={max} />
      <br />
      <small>
        ({value} / {max})
      </small>
    </div>
  );
};
