import React from 'react'
import LeftImage from '@assets/img/brick-house-128.jpg'

import styles from './Up.module.scss'

const Up = () => {
  return (
    <div className={styles.sides}>
        <div className={styles.left}>
            <img src={LeftImage} alt="house" />
        </div>

        <div className={styles.right}>
            <h1 className={styles.title}>
                ruswh - это группа компаний
            </h1>

            <p className={styles.text}>
                Единственная в России компания, собравшая в своем составе лучшие технологии для строительства экологичных домов из дерева
            </p>
        </div>
    </div>
  )
}

export default Up