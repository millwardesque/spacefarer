import { Ship } from './Ship';
import { ShipComponent, ShipComponentOperationalStatus } from './ShipComponent';

export type PowerSource = ShipComponent & {
  powerConsumed: number;
  powerProvided: number;
  type: 'power';
};

export function generateRandomPowerSource(): PowerSource {
  const powerProvided = 1 + Math.floor(Math.random() * 3);
  const isWorkingProbability = 0.2;
  const operationalStatus: ShipComponentOperationalStatus =
    Math.random() < isWorkingProbability ? 'working' : 'broken';

  return {
    isPowered: true,
    name: 'basic',
    operationalStatus,
    powerConsumed: 0,
    powerProvided,
    powerRequirement: 0,
    type: 'power',
  };
}

export function isBetterPowerSource(
  oldSource: PowerSource | undefined,
  newSource: PowerSource | undefined
) {
  if (oldSource === undefined) {
    return true;
  } else if (newSource === undefined) {
    return false;
  }

  const hasMoreCapacity = newSource.powerProvided > oldSource.powerProvided;
  const worksBetter =
    oldSource.operationalStatus === 'broken' &&
    newSource.operationalStatus === 'working';
  const worksTheSame =
    oldSource.operationalStatus === newSource.operationalStatus;

  if (worksBetter) {
    return true;
  } else if (worksTheSame && hasMoreCapacity) {
    return true;
  } else {
    return false;
  }
}
