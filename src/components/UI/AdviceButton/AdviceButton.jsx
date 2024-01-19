import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AdviceButton.module.scss'

const AdviceButton = () => {
  return (
    <Link to='/contacts' className={styles.advice_button}>Получить консультацию</Link>
  )
}

export default AdviceButton