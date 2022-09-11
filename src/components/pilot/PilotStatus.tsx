import React from 'react';

import { Pilot } from '../../models/Pilot';
import { Card } from '../atoms/Card';
import { ProgressBar } from '../atoms/ProgressBar';

interface PilotStatusProps {
  pilot: Pilot;
}

export const PilotStatus: React.FC<PilotStatusProps> = ({ pilot }) => {
  return (
    <div className="pilotStatus">
      <h1>Pilot</h1>
      <Card heading={<h2>Stats</h2>}>
        <ProgressBar label="Fatigue" value={pilot.fatigue} />
        <ProgressBar label="Health" value={pilot.health} />
        <ProgressBar label="Hunger" value={pilot.hunger} />
      </Card>
    </div>
  );
};
