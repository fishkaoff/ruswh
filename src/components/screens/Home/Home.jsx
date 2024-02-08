import React from "react";
import Header from "../../elements/Header/Header";
import Start from "../../elements/Start/Start";
import ScrollToSection from "./ScrollToSection";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.pageWrapper}>
      <ScrollToSection />
      <Header />
      <div className={styles.content} id="start">
        <Start />
      </div>
      <div className={styles.content} id="start2">
        <Start />
      </div>
    </div>
  );
};

export default Home;
