import React from "react";

import { Engine } from "../../models/Engine";

interface ShipEngineProps {
  engine: Engine | undefined;
}

function generateEngineDescription(engine: Engine | undefined) {
  if (!engine) {
    return "no engine";
  } else if (engine.isWorking) {
    return "a working engine";
  } else {
    return "a broken engine";
  }
}

export const ShipEngine: React.FC<ShipEngineProps> = ({ engine }) => {
  const description = generateEngineDescription(engine);
  return <span>{description}</span>;
};
