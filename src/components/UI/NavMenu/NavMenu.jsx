import React from 'react'
import styles from './NavMenu.module.scss'
import { MenuItems } from './NavMenu.data'

const NavMenu = () => {
  return (
    <div className={styles.nav_menu}>
        <ul>
            {MenuItems.map(MenuItem => (
                <li>
                    <a href={MenuItem.link} key={MenuItem.link} className={styles.nav_item}>{MenuItem.name}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavMenu