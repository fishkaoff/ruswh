import React from "react";
import styles from "./Start.module.scss";
import Up from "./modules/Up/Up";
import Down from "./modules/Down/Down";

const Start = () => {
  return (
    <div className={styles.start}>
      <div className={styles.up}>
        <Up />
      </div>

      <div className={styles.down}>
        <Down />
      </div>
    </div>
  );
};

export default Start;
