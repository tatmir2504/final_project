import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import home from "./signin.svg";
import thief from "./thief.svg";
import signup from "./signup.svg";
import "./home.css";

export const Home = () => {
  return (
    <main className="home">
      <h1>Потерялся велосипед?</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <p>Потерялся велосипед?
            Не расстраивайтесь - всё будет хорошо.</p>
            <img className="ride" src={home} alt="bike" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <p>Внимательно осмотрите место, где вы его оставили и сделайте фотографии.</p>
            <img src={thief} alt="thief" />
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <p>Cообщитe о происшествии на нашем сайте - заполните специальную форму.</p>
            <img src={signup} alt="thief" />
          </div>
          </SwiperSlide>
      </Swiper>
      
    </main>
  );
};