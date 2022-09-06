import React from 'react';

import { Pilot } from '../../models/Pilot';
import { ProgressBar } from '../atoms/ProgressBar';

interface PilotStatusProps {
  pilot: Pilot;
}

export const PilotStatus: React.FC<PilotStatusProps> = ({ pilot }) => {
  return (
    <div className="pilotStatus">
      <ProgressBar label="Health" value={pilot.health} />
    </div>
  );
};
