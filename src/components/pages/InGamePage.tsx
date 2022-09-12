import React from 'react';

import { PlanetPage } from '../../components/pages/PlanetPage';
import { InGameContextProvider } from '../../contexts/InGameContext';

export const InGamePage: React.FC = () => {
  return (
    <div className="inGamePage">
      <InGameContextProvider>
        <PlanetPage />
      </InGameContextProvider>
    </div>
  );
};
