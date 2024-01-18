import React from 'react'
import styles from './Logo.module.scss'
import LogoImage from '@assets/img/logo.svg'

const Logo = () => {
  return (
    <div className={styles.logo}>
        <a href="#">
          <img src={LogoImage} alt="ruswh logo"/> 
        </a>
    </div>
  )
}

export default Logo