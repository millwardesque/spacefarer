import React from 'react';

import { Coordinates } from '../../models/Coordinates';
import { LabelledValue } from './LabelledValue';

interface CoordinatesLabelProps {
  coordinates: Coordinates;
  label?: string;
}

export const CoordinatesLabel: React.FC<CoordinatesLabelProps> = ({
  coordinates,
  label,
}) => {
  const formattedCoordinates = `(${coordinates.x}, ${coordinates.y})`;
  return <LabelledValue label={label} value={formattedCoordinates} />;
};
