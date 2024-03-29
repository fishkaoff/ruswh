import React from "react";
import NavMenu from "@components/UI/NavMenu/NavMenu";
import Logo from "@components/UI/Logo/Logo";
import ContactsMenu from "@components/UI/ContactsMenu/ContactsMenu";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.sides}>
        <div className={styles.left}>
          <Logo className={styles.logo}/>
        </div>

        <div className={styles.center}>
          <NavMenu />
        </div>

        <div className={styles.right}>
          <ContactsMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
