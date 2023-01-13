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

export function directionFrom(
  origin: Coordinates,
  destination: Coordinates
): Coordinates {
  const magnitude = distanceBetween(origin, destination);
  return divideByScalar(subtract(destination, origin), magnitude);
}

export function add(a: Coordinates, b: Coordinates): Coordinates {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}

export function subtract(a: Coordinates, b: Coordinates): Coordinates {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  };
}

export function multiplyByScalar(a: Coordinates, m: number): Coordinates {
  return {
    x: a.x * m,
    y: a.y * m,
  };
}

export function divideByScalar(a: Coordinates, m: number): Coordinates {
  return {
    x: a.x / m,
    y: a.y / m,
  };
}
