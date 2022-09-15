import React from 'react';

import { Coordinates } from '../../models/Coordinates';

interface LabelledValueProps {
  label?: string;
  value: string | number;
}

export const LabelledValue: React.FC<LabelledValueProps> = ({
  label,
  value,
}) => {
  return (
    <div>
      {label && <strong>{label}: </strong>}
      <span>{value}</span>
    </div>
  );
};
