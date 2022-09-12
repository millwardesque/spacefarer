import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { GameOverPage } from './components/pages/GameOverPage';
import { InGamePage } from './components/pages/InGamePage';
import { GAMEOVER_ROUTE, INGAME_ROUTE } from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={INGAME_ROUTE} element={<InGamePage />} />
        <Route path={GAMEOVER_ROUTE} element={<GameOverPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
