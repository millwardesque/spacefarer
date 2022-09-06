export interface Planet {
  name: string;
  oxygen: number;
}

export function generatePlanet(name: string, oxygen: number = 1.0): Planet {
  return {
    name,
    oxygen,
  };
}
