import React from "react";
import Selector from '../../../../UI/Selector/Selector'
import RightImage from '@assets/img/frame-house.jpg'

import styles from "./Down.module.scss";

const Down = () => {
  return (
    <div className={styles.sides}>
      <div className={styles.left}>
        <Selector/>
      </div>

      <div className={styles.right}>
        <img src={RightImage} alt="house" />
      </div>
    </div>
  );
};

export default Down;
