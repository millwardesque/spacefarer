import { useCallback, useContext, useMemo } from 'react';

import { InGameContext } from '../contexts/InGameContext';
import { generateRandomEngine } from '../models/Engine';
import {
  generateRandomPowerSource,
  isBetterPowerSource,
} from '../models/PowerSource';
import {
  attemptToPowerComponent,
  canComponentBePowered,
  Ship,
} from '../models/Ship';

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

  const onExplore = useCallback((): PlayerActionResult => {
    clock.addHour();
    setClock(clock);

    setPilot({
      ...pilot,
      fatigue: pilot.fatigue + 0.1,
      hunger: pilot.hunger + 0.1,
    });

    const engineFindProbability = 0.1;
    const powerFindProbability = 0.3;
    if (Math.random() <= engineFindProbability) {
      const newEngine = generateRandomEngine();
      setShip({
        ...ship,
        engine: newEngine,
      });
      return {
        message: `You've found a ${newEngine.name} engine! (Status: ${newEngine.operationalStatus}, power draw: ${newEngine.powerRequirement})`,
      };
    } else if (Math.random() <= powerFindProbability) {
      const newPowerSource = generateRandomPowerSource();
      if (isBetterPowerSource(ship.powerSource, newPowerSource)) {
        setShip({
          ...ship,
          powerSource: newPowerSource,
        });
        return {
          message: `You've found a ${newPowerSource.name} power source! (Status: ${newPowerSource.operationalStatus}, power provided: ${newPowerSource.powerProvided})`,
        };
      } else {
        return {
          message: `You've found a ${newPowerSource.name} power source, but it's not as good as the one you have.`,
        };
      }
    } else {
      return { message: 'No luck today' };
    }
  }, [clock, pilot, setClock, setPilot, setShip, ship]);

  const onPowerEngine = useCallback((): PlayerActionResult => {
    const success =
      ship.engine !== undefined && attemptToPowerComponent(ship, ship.engine);
    if (success) {
      setShip({
        ...ship,
      });
      return {
        message: `Engine powered up!`,
      };
    } else {
      return { message: 'Unable to power the engine!' };
    }
  }, [ship]);

  const playerActions = useMemo((): PlayerAction[] => {
    const actions = [];

    actions.push({
      name: 'Explore',
      action: onExplore,
    });

    if (ship.engine && canComponentBePowered(ship, ship.engine)) {
      actions.push({
        name: 'Power engine',
        action: onPowerEngine,
      });
    }

    return actions;
  }, [onExplore]);

  return playerActions;
}
