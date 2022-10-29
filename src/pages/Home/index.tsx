import React, { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import style from './home.module.scss';

const Home: FC = () => {
  return (
    <section className={style.slider}>
      <div className={style.container}>
        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.mySwiper}>
          <SwiperSlide>
            <div className={style.offset}>
              <h1>Hi, I’m Aleksey Popov</h1>
              <h1>And I’m Frontend developer</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offset}>
              <h1>Hi, I’m Aleksey Popov</h1>
              <h1>And I’m Frontend developer</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offset}>
              <h1>Hi, I’m Aleksey Popov</h1>
              <h1>And I’m Frontend developer</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
