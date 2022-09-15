import { Coordinates } from './Coordinates';
import { Engine } from './Engine';
import { PowerSource } from './PowerSource';
import { Shields } from './Shields';
import { ShipComponent } from './ShipComponent';

export interface Ship {
  engine: Engine | undefined;
  position: Coordinates;
  powerSource: PowerSource | undefined;
  shields: Shields | undefined;
}

export function generateShip(
  engine: Engine | undefined,
  position: Coordinates,
  powerSource: PowerSource | undefined,
  shields: undefined
): Ship {
  return {
    engine,
    position,
    powerSource,
    shields,
  };
}

export function canComponentBePowered(
  ship: Ship,
  component: ShipComponent
): boolean {
  const powerSource = ship.powerSource;
  if (!powerSource) {
    return false;
  }

  const powerAvailable = powerSource.powerProvided - powerSource.powerConsumed;
  return (
    powerSource.operationalStatus === 'working' &&
    component.operationalStatus === 'working' &&
    component.isPowered === false &&
    powerAvailable >= component.powerRequirement
  );
}

export function attemptToPowerComponent(
  ship: Ship,
  component: ShipComponent
): boolean {
  const powerSource = ship.powerSource;
  if (powerSource && canComponentBePowered(ship, component)) {
    powerSource.powerConsumed += component.powerRequirement;
    component.isPowered = true;
    return true;
  } else {
    return false;
  }
}
