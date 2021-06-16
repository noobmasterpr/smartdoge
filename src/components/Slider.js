import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

import "./styles.css";
import "./styles.scss";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper/core";
// install Swiper modules
SwiperCore.use([
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
  Autoplay,
]);

export default function Slider() {
  return (
    <div className="wrapper">
      <Swiper
        effect={"coverflow"}
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={3}
        spaceBetween={6}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <span className="firstPoint"></span>
        <span className="secondPoint"></span>
        <SwiperSlide>
          <img
            src="https://media.giphy.com/media/YRW7L5BUVsRIzjemDS/giphy.gif"
            className="swiper-lazy"
          />
          <div className="info">
            <h2 className="titleText">Smartdoge Finance</h2>
            <p className="paraText">
              As the latest member of the BNB token family, $SF has limitless
              distribution and potential growth in the altcoin space.
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.giphy.com/media/xTiTnL4rWDgEdLRzby/giphy.gif"
            className="swiper-lazy"
          />
          <div className="info">
            <h2 className="titleText">Decentralized Token</h2>
            <p className="paraText">
              Develop into a stable token with 1B+ Market Cap. Grow to 100,000
              Holders.
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.giphy.com/media/j3n4Ol8p8SwnC5GIBB/giphy-downsized.gif"
            className="swiper-lazy"
          />
          <div className="info">
            <h2 className="titleText">New Smart Chain</h2>
            <p className="paraText">
              $SF is built on top of the Binance blockchain to minimize gas
              fees. 5% of remaining total supply is added to the LP each week.
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.giphy.com/media/lRvqfh7DjfjLi3OwJd/giphy.gif"
            className="swiper-lazy"
          />
          <div className="info">
            <h2 className="titleText">Buy Smartdoge</h2>
            <p className="paraText">
              Buy $SF tokens from PancakeSwap in minutes! Join the Telegram if
              you need help or have any questions!
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.giphy.com/media/je1tdCuUWbzd2WrXyU/giphy-downsized.gif"
            className="swiper-lazy"
          />
          <div className="info">
            <h2 className="titleText">New on PancakeSwap</h2>
            <p className="paraText">
              Total supply was tied to BNB on PancakeSwap, and growing each
              week.
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
