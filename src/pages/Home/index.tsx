import React, { FC } from 'react';

import style from './home.module.scss';

const Home: FC = () => {
  return (
    <section className={style.slider}>
      <div className={style.container}>
        <div className={style.offset}>
          <h1>Hi, I’m Aleksey Popov</h1>
          <h1>And I’m Frontend developer</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
