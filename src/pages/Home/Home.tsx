import React from 'react'
import Header from '../../components/Header/Header'
import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <p>Home</p>
      <Header />
    </div>
  )
}

export default Home
