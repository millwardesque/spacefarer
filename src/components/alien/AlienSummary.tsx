import React from 'react';
import { Alien } from '../../models/Alien';

import { Card } from '../atoms/Card';
import { CoordinatesLabel } from '../atoms/CoordinatesLabel';
import { ProgressBar } from '../atoms/ProgressBar';

interface AlienDisplayProps {
  alien: Alien;
}

export const AlienDisplay: React.FC<AlienDisplayProps> = ({ alien }) => {
  return (
    <div className="alienSummary">
      <Card heading={<h2>Alien - {alien.type}</h2>}>
        <ProgressBar label="Health" value={alien.health} />
        <CoordinatesLabel label="Position" coordinates={alien.position} />
      </Card>
    </div>
  );
};
