import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
