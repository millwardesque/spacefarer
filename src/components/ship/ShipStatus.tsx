import React from "react";

import { Ship } from "../../models/Ship";
import { ShipEngine } from "./ShipEngine";
import { ShipPower } from "./ShipPower";
import { ShipShields } from "./ShipShields";

interface ShipStatusProps {
  ship: Ship;
}

export const ShipStatus: React.FC<ShipStatusProps> = ({ ship }) => {
  return (
    <div className="shipStatus">
      Your ship has <ShipPower ship={ship} />,{" "}
      <ShipEngine engine={ship.engine} />, and <ShipShields ship={ship} />.
      Toilet still works, though.
    </div>
  );
};
