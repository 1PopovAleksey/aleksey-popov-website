import React, { FC } from 'react';

import Footer from './layout/footer';
import Header from './layout/header';
import Main from './layout/main';

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
