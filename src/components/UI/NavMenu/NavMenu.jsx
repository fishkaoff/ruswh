import React from 'react'
import {Link} from 'react-router-dom'
import styles from './NavMenu.module.scss'
import { MenuItems } from './NavMenu.data'

const NavMenu = () => {
  return (
    <div className={styles.nav_menu}>
        <ul>
            {MenuItems.map(MenuItem => (
                <li>
                    <Link to={MenuItem.link} key={MenuItem.link} className={styles.nav_item}>{MenuItem.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavMenu