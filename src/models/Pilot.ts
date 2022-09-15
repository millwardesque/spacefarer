import { Coordinates } from './Coordinates';

export interface Pilot {
  fatigue: number;
  health: number;
  hunger: number;
  position: Coordinates;
}

export function generatePilot(position: Coordinates): Pilot {
  return {
    fatigue: 0.0,
    health: 0.75,
    hunger: 0.0,
    position,
  };
}
