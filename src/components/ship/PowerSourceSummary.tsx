import React from 'react';

import { PowerSource } from '../../models/PowerSource';
import { Card } from '../atoms/Card';

interface ShipPowerProps {
  powerSource: PowerSource | undefined;
}

function generateSummary(powerSource: PowerSource | undefined): JSX.Element {
  if (!powerSource) {
    return <span>No power source installed</span>;
  } else {
    return (
      <ul>
        <li>Name: {powerSource.name}</li>
        <li>Status: {powerSource.operationalStatus}</li>
        <li>
          Consumption: {powerSource.powerConsumed} / {powerSource.powerProvided}{' '}
          units
        </li>
      </ul>
    );
  }
}

export const PowerSourceSummary: React.FC<ShipPowerProps> = ({
  powerSource,
}) => {
  return (
    <Card className="powerSource" heading={<h2>Power</h2>}>
      {generateSummary(powerSource)}
    </Card>
  );
};
