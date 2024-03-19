import React from "react";
import StartSlider from "@components/UI/StartSlider/StartSlider";

import FirstSliderImage from "@assets/img/slider-images/slider-image-1.png";
import SecondSliderImage from "@assets/img/slider-images/slider-image-2.png";
import ThirdSliderImage from "@assets/img/slider-images/slider-image-3.jpg";

import styles from "./Start.module.scss";

const Start = () => {
  const slides = [
    {
      image: FirstSliderImage,
      text: "Экологичные дома ручной сборки из натурального дерева",
    },
    { image: SecondSliderImage, text: "Инновационный подход к производству" },
    {
      image: ThirdSliderImage,
      text: "ЛУЧШИЕ ПРОЕКТЫ “ПОД КЛЮЧ” ЕВРОПЕЙСКОГО УРОВНЯ НА ТЕРРИТОРИИ РОССИИ",
    },
  ];

  return (
    <div className={styles.start}>
      <StartSlider slides={slides} />
    </div>
  );
};

export default Start;
