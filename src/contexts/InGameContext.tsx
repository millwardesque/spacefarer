import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FATIGUE_PER_HOUR,
  HEALTH_PER_FAMISHED_HOUR,
  HUNGER_PER_HOUR,
} from '../constants';
import { eventSubscribe, eventUnsubscribe } from '../events';
import { Alien } from '../models/Alien';
import { Clock } from '../models/Clock';
import { generateAlien } from '../models/Alien';
import { generateCoordinates } from '../models/Coordinates';
import { generatePilot, Pilot } from '../models/Pilot';
import { generatePlanet, Planet } from '../models/Planet';
import { generateShip, Ship } from '../models/Ship';
import { timeToHours, Time } from '../models/Time';
import { GAMEOVER_ROUTE } from '../routes';
import { clamp } from '../utils';

interface InGameContextInterface {
  aliens: Alien[];
  setAliens: (aliens: Alien[]) => void;
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
  aliens: [],
  setAliens: (_) => {},
  clock: new Clock(),
  setClock: (_) => {},
  pilot: generatePilot(generateCoordinates(0, 0)),
  setPilot: (_) => {},
  planet: generatePlanet('DEFAULT'),
  setPlanet: (_) => {},
  ship: generateShip(
    undefined,
    generateCoordinates(0, 0),
    undefined,
    undefined
  ),
  setShip: (_) => {},
});

export const InGameContextProvider: React.FC<{
  children: JSX.Element[] | JSX.Element;
}> = ({ children }) => {
  const navigateTo = useNavigate();
  const [aliens, setAliens] = useState([] as Alien[]);
  const [clock, setClock] = useState(new Clock());
  const [pilot, setPilot] = useState(generatePilot(generateCoordinates(0, 0)));
  const [planet, setPlanet] = useState(generatePlanet('Arrakis'));
  const [ship, setShip] = useState(
    generateShip(undefined, generateCoordinates(0, 0), undefined, undefined)
  );

  const onTimeChange = useCallback(
    ({ detail }: CustomEvent) => {
      const timeDelta = detail.timeDelta as Time;
      const timeInHours = timeToHours(timeDelta);
      const fatigueChange = timeInHours * FATIGUE_PER_HOUR;
      const hungerChange = timeInHours * HUNGER_PER_HOUR;

      const newFatigue = pilot.fatigue + fatigueChange;
      const newHunger = pilot.hunger + hungerChange;
      const newHealth =
        pilot.health - (newHunger > 1.0 ? HEALTH_PER_FAMISHED_HOUR : 0);

      const alienFindProbability = 0.1;
      for (let i = 0; i < timeInHours; i++) {
        if (Math.random() < alienFindProbability) {
          setAliens([...aliens, generateAlien(pilot.position)]);
        }
      }

      setPilot({
        ...pilot,
        fatigue: clamp(newFatigue),
        health: clamp(newHealth),
        hunger: clamp(newHunger),
      });
    },
    [pilot, setPilot]
  );

  useEffect(() => {
    if (pilot.health <= 0.0) {
      navigateTo(GAMEOVER_ROUTE);
    }
  }, [pilot.health]);

  useEffect(() => {
    eventSubscribe('clock:time-change', onTimeChange);

    return () => {
      eventUnsubscribe('clock:time-change', onTimeChange);
    };
  }, [onTimeChange]);

  return (
    <InGameContext.Provider
      value={{
        aliens,
        setAliens,
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
