import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
const StartSlider = () => {
  const images = [
    "http://ruswh.ru/slider-image-1.jpg",
    "http://ruswh.ru/slider-image-2.jpg",
    "http://ruswh.ru/slider-image-3.jpg",
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      navigation={true}
      autoplay={{ delay: 4000 }}
      effect={"fade"}
    >
      {images.map((image, index) => (
        <SwiperSlide>
          <img src={image} alt="image" key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StartSlider;
