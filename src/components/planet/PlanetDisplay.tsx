import React, { useContext } from 'react';

import { InGameContext } from '../../contexts/InGameContext';
import { PlanetDescription } from './PlanetDescription';
import { PlanetImage } from './PlanetImage';

export const PlanetDisplay: React.FC = () => {
  const { planet } = useContext(InGameContext);

  return (
    <>
      <PlanetDescription planet={planet} />
      <PlanetImage planet={planet} />
    </>
  );
};
