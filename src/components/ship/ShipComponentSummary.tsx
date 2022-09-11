import React from 'react';

import { ShipComponent } from '../../models/ShipComponent';
import { Card } from '../atoms/Card';

interface ShipComponentSummaryProps {
  heading: string;
  shipComponent: ShipComponent | undefined;
}

function generateDescription(
  shipComponent: ShipComponent | undefined
): JSX.Element {
  if (!shipComponent) {
    return <span>Nothing installed</span>;
  } else {
    return (
      <ul>
        <li>Name: {shipComponent.name}</li>
        <li>Status: {shipComponent.operationalStatus}</li>
        <li>Is powered: {shipComponent.isPowered ? 'Yes' : 'No'}</li>
        <li>Power required: {shipComponent.powerRequirement} units</li>
      </ul>
    );
  }
}

export const ShipComponentSummary: React.FC<ShipComponentSummaryProps> = ({
  heading,
  shipComponent,
}) => {
  const headingElement = <h2>{heading}</h2>;
  const description = generateDescription(shipComponent);
  return <Card heading={headingElement}>{description}</Card>;
};
