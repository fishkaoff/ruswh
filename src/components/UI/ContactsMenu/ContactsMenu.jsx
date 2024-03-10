import React from "react";
import styles from "./ContactsMenu.module.scss";
import EmailIcon from "@assets/img/email-icon.svg";
import PhoneIcon from "@assets/img/phone-icon.svg";

import { Credentials } from "./ContactsMenu.data.js";

const ContactsMenu = () => {
  return (
    <div className={styles.contacts_menu}>
      <div className={styles.left}>
        <img src={EmailIcon} alt="email icon" className={styles.icon} />
        <a href={"mailto:" + Credentials.email} className={styles.text}>
          {Credentials.email}
        </a>
      </div>

      <div className={styles.right}>
        <img src={PhoneIcon} alt="phone icon" className={styles.icon} />
        <a href={"tel:" + Credentials.phone} className={styles.text}>
          {Credentials.phone}
        </a>
      </div>
    </div>
  );
};

export default ContactsMenu;
