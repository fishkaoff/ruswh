import React from "react";


import styles from "./Selector.module.scss";

const Selector = () => {
  return (
    <div className={styles.items}>
      <div className={styles.up}>
        <h1 className={styles.fb}>
            forestbrick
        </h1>
      </div>

      <div className={styles.down}>
        <h1 className={styles.foksla}>
            foksla
        </h1>
      </div>
    </div>
  );
};

export default Selector;
