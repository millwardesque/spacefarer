import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../atoms/Button';
import { PageLayout } from '../atoms/PageLayout';
import { INGAME_ROUTE } from '../../routes';

export const GameOverPage: React.FC = () => {
  const navigateTo = useNavigate();
  const handleClick = useCallback(() => {
    navigateTo(INGAME_ROUTE);
  }, [navigateTo]);

  return (
    <PageLayout>
      <div className="gameOverPage">
        <h1>You have died. Try again.</h1>
        <Button onClick={handleClick}>Try again</Button>
      </div>
    </PageLayout>
  );
};
