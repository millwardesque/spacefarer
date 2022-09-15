export interface Coordinates {
  x: number;
  y: number;
}

export function generateCoordinates(x: number, y: number): Coordinates {
  return {
    x,
    y,
  };
}

/**
 * Calculates the distance between two coordinates
 * @param a A coordinate
 * @param b A coordinate
 * @returns The distance between A and B
 */
export function distanceBetween(a: Coordinates, b: Coordinates): number {
  return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
}
