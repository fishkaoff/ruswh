import React from "react";
import Selector from '../../../../UI/Selector/Selector'
import RightImage from '@assets/img/frame-house.jpg'

import { motion } from "framer-motion";
import { leftSlideAnimation, rightSlideAnimation } from "@components/UI/Animations/SlideAnimations";

import styles from "./Down.module.scss";

const Down = () => {
  return (
    <motion.div className={styles.sides} initial="hidden" whileInView="visible">
      <motion.div className={styles.left} variants={leftSlideAnimation} transition={{duration: 1.2}}>
        <Selector/>
      </motion.div>

      <motion.div className={styles.right} variants={rightSlideAnimation} transition={{duration: 1.2}}>
        <img src={RightImage} alt="house" />
      </motion.div>
    </motion.div>
  );
};

export default Down;
