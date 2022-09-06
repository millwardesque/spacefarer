import React, { useContext, useMemo } from 'react';

import './App.css';
import { InGameContextProvider } from './contexts/InGameContext';
import { PageLayout } from './components/atoms/PageLayout';
import { Sidebar } from './components/atoms/Sidebar';
import { PlanetDisplay } from './components/planet/PlanetDisplay';

const App: React.FC = () => {
  const sidebar = useMemo(() => <Sidebar />, []);

  return (
    <InGameContextProvider>
      <PageLayout leftSide={sidebar}>
        <PlanetDisplay />
      </PageLayout>
    </InGameContextProvider>
  );
};

export default App;
