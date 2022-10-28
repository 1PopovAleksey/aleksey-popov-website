import React, { FC } from 'react';

import './scss/global.scss';

import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
