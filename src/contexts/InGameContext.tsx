import React, { useCallback, useState } from 'react';

import { HUNGER_PER_HOUR } from '../constants';
import { Clock } from '../models/Clock';
import { generatePilot, Pilot } from '../models/Pilot';
import { generatePlanet, Planet } from '../models/Planet';
import { generateShip, Ship } from '../models/Ship';
import { timeToHours, Time } from '../models/Time';

interface InGameContextInterface {
  clock: Clock;
  setClock: (clock: Clock) => void;
  pilot: Pilot;
  setPilot: (pilot: Pilot) => void;
  planet: Planet;
  setPlanet: (planet: Planet) => void;
  ship: Ship;
  setShip: (ship: Ship) => void;
}

export const InGameContext = React.createContext<InGameContextInterface>({
  clock: new Clock(),
  setClock: (_) => {},
  pilot: generatePilot(),
  setPilot: (_) => {},
  planet: generatePlanet('DEFAULT'),
  setPlanet: (_) => {},
  ship: generateShip(undefined, undefined, undefined),
  setShip: (_) => {},
});

export const InGameContextProvider: React.FC<{
  children: JSX.Element[] | JSX.Element;
}> = ({ children }) => {
  const [clock, setClock] = useState(new Clock());
  const [pilot, setPilot] = useState(generatePilot());
  const [planet, setPlanet] = useState(generatePlanet('Arrakis'));
  const [ship, setShip] = useState(
    generateShip(undefined, undefined, undefined)
  );

  // @TODO Trigger via event.
  const onTimeChange = useCallback(
    (timeDelta: Time) => {
      const hungerChange = timeToHours(timeDelta) * HUNGER_PER_HOUR;
      setPilot({
        ...pilot,
        hunger: pilot.hunger + hungerChange,
      });
    },
    [pilot, setPilot]
  );

  return (
    <InGameContext.Provider
      value={{
        clock,
        setClock,
        pilot,
        setPilot,
        planet,
        setPlanet,
        ship,
        setShip,
      }}
    >
      {children}
    </InGameContext.Provider>
  );
};
