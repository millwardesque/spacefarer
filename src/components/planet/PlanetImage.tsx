import React from "react";
import { Planet } from "../../models/Planet";

interface PlanetImageProps {
  planet: Planet;
}

export const PlanetImage: React.FC<PlanetImageProps> = ({ planet }) => {
  return (
    <div className="planetImage">
      <img alt={planet.name} src="/images/planet-1.jpg" />
    </div>
  );
};
