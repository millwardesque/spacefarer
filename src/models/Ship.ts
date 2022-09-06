import { Engine } from './Engine';

export interface Ship {
  engine: Engine | undefined;
  powerSource: undefined;
  shields: undefined;
}

export function generateShip(
  engine: Engine | undefined,
  powerSource: undefined,
  shields: undefined
): Ship {
  return {
    engine,
    powerSource,
    shields,
  };
}
