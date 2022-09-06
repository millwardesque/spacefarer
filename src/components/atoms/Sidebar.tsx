import React, { useCallback, useContext, useMemo, useState } from 'react';

import { InGameContext } from '../../contexts/InGameContext';
import {
  PlayerAction,
  PlayerActionResult,
  usePlayerActions,
} from '../../hooks/usePlayerActions';
import { PilotStatus } from '../pilot/PilotStatus';
import { ShipStatus } from '../ship/ShipStatus';
import { Button } from './Button';
import { ClockDisplay } from './ClockDisplay';

export const Sidebar: React.FC = () => {
  const [actionResult, setActionResult] = useState<
    PlayerActionResult | undefined
  >(undefined);
  const { clock, pilot, ship } = useContext(InGameContext);
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
      <Button onClick={() => handleActionClick(action)}>{action.name}</Button>
    ));
  }, [actions]);

  return (
    <>
      <ClockDisplay clock={clock} />
      <ShipStatus ship={ship} />
      <PilotStatus pilot={pilot} />
      <div className="actions">
        <h1>Actions</h1>
        <div>{actionList}</div>
      </div>
      {actionResult && (
        <div className="actionResult">{actionResult.message}</div>
      )}
    </>
  );
};