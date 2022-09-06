import React from 'react';

import { Pilot } from '../../models/Pilot';
import { ProgressBar } from '../atoms/ProgressBar';

interface PilotStatusProps {
  pilot: Pilot;
}

export const PilotStatus: React.FC<PilotStatusProps> = ({ pilot }) => {
  return (
    <div className="pilotStatus">
      <ProgressBar label="Fatigue" value={pilot.fatigue} />
      <ProgressBar label="Health" value={pilot.health} />
      <ProgressBar label="Hunger" value={pilot.hunger} />
    </div>
  );
};
