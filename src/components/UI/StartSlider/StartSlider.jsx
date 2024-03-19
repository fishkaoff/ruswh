import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import styles from "./StartSlider.module.scss";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
const StartSlider = (props) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      navigation={true}
      autoplay={{ delay: 4000 }}
      effect={"fade"}
      className={styles.swiper}
    >
      {props.slides.map((slide, index) => (
        <SwiperSlide className={styles.slide}>
          <img
            src={slide.image}
            alt="slide"
            key={index}
            className={styles.slideImage}
          />

          <p className={styles.text}>{slide.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StartSlider;
