import React from 'react';

import { Ship } from '../../models/Ship';
import { CoordinatesLabel } from '../atoms/CoordinatesLabel';
import { ShipComponentSummary } from './ShipComponentSummary';
import { PowerSourceSummary } from './PowerSourceSummary';

interface ShipStatusProps {
  ship: Ship;
}

export const ShipStatus: React.FC<ShipStatusProps> = ({ ship }) => {
  return (
    <div className="shipStatus">
      <h1>Ship</h1>
      <CoordinatesLabel coordinates={ship.position} label="Position" />
      <PowerSourceSummary powerSource={ship.powerSource} />
      <ShipComponentSummary heading="Engine" shipComponent={ship.engine} />
      <ShipComponentSummary heading="Shields" shipComponent={ship.shields} />
      Oh, and the toilet still works.
    </div>
  );
};
