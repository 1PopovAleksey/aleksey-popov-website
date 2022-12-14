import React, { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper';

import 'swiper/css';

import me from '../../assets/img/me.png';

import { Github, Gitlab, Telegram, Vk } from './icons';

import style from './home.module.scss';

const Home: FC = () => {
  return (
    <section className={style.slider}>
      <div className={style.container}>
        <Swiper
          direction={'vertical'}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          modules={[Mousewheel, Keyboard]}
          className={style.mySwiper}>
          <SwiperSlide>
            <div className={style.offset}>
              <div className={style.content}>
                <div className={style.content_text}>
                  <div>
                    <h1 className={style.title}>
                      Lorem Ipsum is <span className={style.green}>simply</span> dummy text of the
                      printing.
                    </h1>
                    <p className={style.paragraph}>
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{' '}
                      <span className={style.green}>when an unknown</span> printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                    <p className={style.paragraph}>
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{' '}
                      <span className={style.green}>when an unknown</span> printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                  <div className={style.icons}>
                    <a href="https://t.me/AlekseyPopovDev">
                      <Telegram />
                    </a>
                    <a href="https://vk.com/1popovaleksey">
                      <Vk />
                    </a>
                    <a href="https://github.com/1PopovAleksey">
                      <Github />
                    </a>
                    <a href="https://gitlab.com/alekseypopov.dev">
                      <Gitlab />
                    </a>
                  </div>
                </div>
                <img className={style.image} src={me} alt="It's me" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offset}>
              <h1>Hi, I???m Aleksey Popov</h1>
              <h1>And I???m Frontend developer</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offset}>
              <h1>Hi, I???m Aleksey Popov</h1>
              <h1>And I???m Frontend developer</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
