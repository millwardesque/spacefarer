export interface Pilot {
  health: number;
  hunger: number;
  fatigue: number;
}

export function generatePilot() {
  return { health: 0.75, hunger: 0.0, fatigue: 0.0 };
}
