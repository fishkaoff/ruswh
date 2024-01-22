import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {MenuItems} from './NavMenu.data'
import {FaBars} from "react-icons/fa";
import {CSSTransition} from "react-transition-group";

import styles from './NavMenu.module.scss'

const NavMenu = () => {
    const [active, setActive] = useState(false)

    function controlBurger(state) {
        if (state === true) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    return (
        <div className={styles.nav_menu}>
            <ul>
                {MenuItems.map(MenuItem => (
                    <li>
                        <Link to={MenuItem.link} key={MenuItem.link} className={styles.nav_item}>{MenuItem.name}</Link>
                    </li>
                ))}
            </ul>

            <Link className={styles.burger_bars} onClick={() => controlBurger(active)}>
                <FaBars/>
            </Link>

            <CSSTransition in={active} timeout={300} unmountOnExit>
                <div className={styles.burger_menu}>
                    <ul>
                        {MenuItems.map(MenuItem => (
                            <li>
                                <Link to={MenuItem.link} key={MenuItem.link} className={styles.nav_item}>{MenuItem.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </CSSTransition>

        </div>
    )
}

export default NavMenu