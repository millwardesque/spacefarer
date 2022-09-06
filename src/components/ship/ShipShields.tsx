import React from "react";

import { Ship } from "../../models/Ship";

interface ShipShieldsProps {
  ship: Ship;
}

export const ShipShields: React.FC<ShipShieldsProps> = ({ ship }) => {
  const description = ship.shields ? "shields" : "no shields";
  return <span>{description}</span>;
};
