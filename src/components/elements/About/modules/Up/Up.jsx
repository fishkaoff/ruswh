import React from "react";
import LeftImage from "@assets/img/brick-house-128.jpg";

import { motion } from "framer-motion";
import { leftSlideAnimation, rightSlideAnimation } from "@components/UI/Animations/SlideAnimations";

import styles from "./Up.module.scss";

const Up = () => {
  return (
    <motion.div className={styles.sides} initial="hidden" whileInView="visible">
      <div className={styles.left}>
        <motion.img src={LeftImage} alt="house" variants={leftSlideAnimation} transition={{duration: 1.2}}/>
      </div>
      <motion.div className={styles.right} variants={rightSlideAnimation} transition={{duration: 1.2}}>
        <h1 className={styles.title}>ruswh - это группа компаний</h1>

        <p className={styles.text}>
          Единственная в России компания, собравшая в своем составе лучшие
          технологии для строительства экологичных домов из дерева
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Up;
