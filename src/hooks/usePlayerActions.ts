import React, { useCallback, useContext, useMemo } from 'react';

import { InGameContext } from '../contexts/InGameContext';
import { generateRandomEngine } from '../models/Engine';

export interface PlayerAction {
  name: string;
  action: () => PlayerActionResult;
}

export interface PlayerActionResult {
  message: string;
}

export function usePlayerActions(): PlayerAction[] {
  const { clock, setClock, pilot, setPilot, ship, setShip } =
    useContext(InGameContext);

  const onExplore = useCallback(() => {
    clock.addHour();
    setClock(clock);

    setPilot({
      ...pilot,
      fatigue: pilot.fatigue + 0.1,
      hunger: pilot.hunger + 0.1,
    });

    const engineFindProbability = 0.3;
    if (Math.random() <= engineFindProbability) {
      const newEngine = generateRandomEngine();
      setShip({
        ...ship,
        engine: newEngine,
      });
      return { message: "You've found an engine!" };
    } else {
      return { message: 'No luck today' };
    }
  }, [clock, pilot, setClock, setPilot, setShip, ship]);

  const playerActions = useMemo(() => {
    return [
      {
        name: 'Explore',
        action: onExplore,
      },
    ];
  }, [onExplore]);

  return playerActions;
}
