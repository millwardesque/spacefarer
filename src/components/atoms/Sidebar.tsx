import React, { useCallback, useContext, useMemo, useState } from 'react';

import { InGameContext } from '../../contexts/InGameContext';
import {
  PlayerAction,
  PlayerActionResult,
  usePlayerActions,
} from '../../hooks/usePlayerActions';
import { AlienDisplay } from '../alien/AlienSummary';
import { PilotStatus } from '../pilot/PilotStatus';
import { ShipStatus } from '../ship/ShipStatus';
import { Button } from './Button';
import { ClockDisplay } from './ClockDisplay';

export const Sidebar: React.FC = () => {
  const [actionResult, setActionResult] = useState<
    PlayerActionResult | undefined
  >(undefined);
  const { aliens, clock, pilot, ship } = useContext(InGameContext);
  const actions = usePlayerActions();

  const handleActionClick = useCallback(
    (action: PlayerAction): void => {
      const result = action.action();
      setActionResult(result);
    },
    [setActionResult]
  );

  const actionList = useMemo(() => {
    return actions.map((action) => (
      <Button key={action.name} onClick={() => handleActionClick(action)}>
        {action.name}
      </Button>
    ));
  }, [actions]);

  return (
    <div className="sidebar">
      <ClockDisplay clock={clock} />
      <ShipStatus ship={ship} />
      <PilotStatus pilot={pilot} ship={ship} />
      {aliens.length > 0 &&
        aliens.map((alien) => <AlienDisplay key={alien.id} alien={alien} />)}
      <div className="actions">
        <h1>Actions</h1>
        <div>{actionList}</div>
      </div>
      {actionResult && (
        <div className="actionResult">{actionResult.message}</div>
      )}
    </div>
  );
};
