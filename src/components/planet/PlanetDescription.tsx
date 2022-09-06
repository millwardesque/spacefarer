import React from 'react';

import { Planet } from '../../models/Planet';
import { OxygenMeter } from './OxygenMeter';
import { PlanetName } from './PlanetName';

interface PlanetDescriptionProps {
  planet: Planet;
}

export const PlanetDescription: React.FC<PlanetDescriptionProps> = ({
  planet,
}) => {
  return (
    <div className="planetDescription">
      You have arrived arrived on the the planet{' '}
      <PlanetName planet={planet} />. The oxygen level on this planet
      is <OxygenMeter oxygen={planet.oxygen} />.
    </div>
  );
};
