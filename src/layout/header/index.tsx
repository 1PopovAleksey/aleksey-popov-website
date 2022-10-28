import React, { FC } from 'react';

import style from './header.module.scss';

import { Logo } from './icon';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.offset}>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
