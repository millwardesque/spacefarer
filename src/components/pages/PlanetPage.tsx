import React, { useMemo } from 'react';

import { PageLayout } from '../atoms/PageLayout';
import { Sidebar } from '../atoms/Sidebar';
import { PlanetDisplay } from '../planet/PlanetDisplay';

export const PlanetPage: React.FC = () => {
  const sidebar = useMemo(() => <Sidebar />, []);
  return (
    <PageLayout leftSide={sidebar}>
      <PlanetDisplay />
    </PageLayout>
  );
};
