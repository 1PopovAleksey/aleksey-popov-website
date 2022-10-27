import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

const Main: FC = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={''} />
      </Routes>
    </main>
  );
};

export default Main;
