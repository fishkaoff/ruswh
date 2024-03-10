import React from "react";
import MyHeader from "@elements/Header/Header";
import Start from "@elements/Start/Start";
import About from "@elements/About/About";
import {
  SectionsContainer,
  Section,
  Header,
  ScrollToTopOnMount,
} from "react-fullpage";

import styles from "./Home.module.scss";

const Home = () => {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: "50px",
    sectionPaddingBottom: "0px",
    arrowNavigation: true,
    lockAnchors: true,
  };

  return (
    <div className={styles.pageWrapper}>
      <ScrollToTopOnMount />
      <Header>
        <MyHeader />
      </Header>

      <SectionsContainer {...options}>
        <Section>
          <Start />
        </Section>
        <Section>
          <div className={styles.content}>
            <About />
          </div>
        </Section>
      </SectionsContainer>
    </div>
  );
};

export default Home;
