import React from "react";
import styles from "./About.module.scss";
import Up from "./modules/Up/Up";
import Down from "./modules/Down/Down";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.up}>
        <Up />
      </div>

      <div className={styles.down}>
        <Down />
      </div>
    </div>
  );
};

export default About;
