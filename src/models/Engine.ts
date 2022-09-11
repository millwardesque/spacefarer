import { ShipComponent, ShipComponentOperationalStatus } from './ShipComponent';

export type Engine = ShipComponent & {
  type: 'engine';
};

export function generateRandomEngine(): Engine {
  const powerRequirement = 1 + Math.floor(Math.random() * 3);
  const isWorkingProbability = 0.5;
  const operationalStatus: ShipComponentOperationalStatus =
    Math.random() < isWorkingProbability ? 'working' : 'broken';

  return {
    isPowered: false,
    name: 'basic',
    operationalStatus,
    powerRequirement,
    type: 'engine',
  };
}

export function isBetterEngine(
  oldEngine: Engine | undefined,
  newEngine: Engine | undefined
) {
  if (oldEngine === undefined) {
    return true;
  } else if (newEngine === undefined) {
    return false;
  }

  const requiresLessPower =
    newEngine.powerRequirement < oldEngine.powerRequirement;
  const worksBetter =
    oldEngine.operationalStatus === 'broken' &&
    newEngine.operationalStatus === 'working';
  const worksTheSame =
    oldEngine.operationalStatus === newEngine.operationalStatus;

  if (worksBetter) {
    return true;
  } else if (worksTheSame && requiresLessPower) {
    return true;
  } else {
    return false;
  }
}
