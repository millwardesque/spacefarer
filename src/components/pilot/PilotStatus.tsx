import React from 'react';

import { distanceBetween } from '../../models/Coordinates';
import { Pilot } from '../../models/Pilot';
import { Ship } from '../../models/Ship';
import { Card } from '../atoms/Card';
import { CoordinatesLabel } from '../atoms/CoordinatesLabel';
import { LabelledValue } from '../atoms/LabelledValue';
import { ProgressBar } from '../atoms/ProgressBar';

interface PilotStatusProps {
  pilot: Pilot;
  ship: Ship;
}

export const PilotStatus: React.FC<PilotStatusProps> = ({ pilot, ship }) => {
  return (
    <div className="pilotStatus">
      <h1>Pilot</h1>
      <Card heading={<h2>Stats</h2>}>
        <ProgressBar label="Fatigue" value={pilot.fatigue} />
        <ProgressBar label="Health" value={pilot.health} />
        <ProgressBar label="Hunger" value={pilot.hunger} />
        <CoordinatesLabel label="Position" coordinates={pilot.position} />
        <LabelledValue
          label="Distance to ship"
          value={distanceBetween(pilot.position, ship.position)}
        />
      </Card>
    </div>
  );
};
