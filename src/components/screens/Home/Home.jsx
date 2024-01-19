import React from 'react'
import Header from '../../elements/Header/Header'
import Start from './Start/Start'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      <Start />
    </div>
  )
}

export default Home