import React from "react";

import { Ship } from "../../models/Ship";

interface ShipPowerProps {
  ship: Ship;
}

export const ShipPower: React.FC<ShipPowerProps> = ({ ship }) => {
  const description = ship.powerSource ? "a power source" : "no power source";
  return <span>{description}</span>;
};
