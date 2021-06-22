import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import Image1 from "../images/picture1.jpg";
import Image2 from "../images/picture2.jpg";
import Image3 from "../images/picture3.jpg";
import Image4 from "../images/picture4.jpg";
import Image5 from "../images/picture5.jpg";

import "./styles.css";
import "./styles.scss";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  EffectCoverflow,
  Autoplay,
} from "swiper/core";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, EffectCoverflow, Autoplay]);

export default function Slider() {
  return (
    <div className="wrapper">
      <Swiper
        breakpoints={{
          720: {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
        }}
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
        spaceBetween={6}
        navigation={true}
        mousewheel={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <span className="firstPoint"></span>
        <span className="secondPoint"></span>
        <SwiperSlide>
          <img src={Image1} className="swiper-lazy" alt="slider smartdoge" />
          <div className="info">
            <h2 className="titleText">DOGE WITH A PURPOSE</h2>
            <p className="paraText">
              Smart Doge Finance is a community-driven, no-loss prize game and
              no-loss pool launchpad built on Binance Smart Chain.
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} className="swiper-lazy" alt="slider smartdoge" />
          <div className="info">
            <h2 className="titleText">SMART - DOGE BRAIN</h2>
            <p className="paraText">
              SMART DOGE $SD breaks through the crypto chains with a simple yet
              elaborate principle: Rethink, Reset and Redesign!
            </p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} className="swiper-lazy" alt="slider smartdoge" />
          <div className="info">
            <h2 className="titleText">YOUR TICKET TO THE MOON</h2>
            <p className="paraText">Watch your crypto holdings grow with $SD</p>
          </div>
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} className="swiper-lazy" alt="slider smartdoge" />
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
          <img src={Image5} className="swiper-lazy" alt="slider smartdoge" />
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
