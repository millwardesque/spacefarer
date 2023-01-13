import { ALIEN_TYPES } from '../constants';
import { Coordinates } from './Coordinates';

let alienIdCounter = 0;

function generateAlienId(): string {
  const id = alienIdCounter.toString();
  alienIdCounter += 1;
  return id;
}

export interface Alien {
  health: number;
  id: string;
  position: Coordinates;
  speed: number;
  strength: number;
  type: string;
}

export function generateAlien(position: Coordinates): Alien {
  const health = 0.5 + Math.random() * 0.5;
  const id = generateAlienId();
  const speed = Math.random() * 10;
  const strength = 1 - speed;
  const type = ALIEN_TYPES[Math.floor(Math.random() * ALIEN_TYPES.length)];
  return {
    health,
    id,
    position: { ...position },
    speed,
    strength,
    type,
  };
}
