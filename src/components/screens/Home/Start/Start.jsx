import React from 'react'
import styles from './Start.module.scss'
import AdviceButton from '@components/UI/AdviceButton/AdviceButton'
import MainImage from '@assets/img/wrapper-bg.jpg'

const Start = () => {
  return (
    <div className={styles.start}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 className={styles.title}>Строительство каркасных домов любой сложности <span>под ключ</span></h1>
        </div>

        <div className={styles.right}>
          <p className={styles.text}>Полный спектр услуг с учётом технологий на всех этапах проектирования и строительства</p>
          <AdviceButton className={styles.advice_button}/>
        </div>
      </div>

      <img src={MainImage} alt="image" className={styles.image}/>
    </div>
  )
}

export default Start