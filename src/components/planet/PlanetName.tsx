import React from "react";
import { Planet } from "../../models/Planet";

interface PlanetNameProps {
  planet: Planet;
}

export const PlanetName: React.FC<PlanetNameProps> = ({ planet }) => {
  return <span>{planet.name}</span>;
};
