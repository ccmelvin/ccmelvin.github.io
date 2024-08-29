import React from 'react'
import Header from '../../components/Header/Header'
// import ResponsiveComponent from '../../components/ResponsiveComponent/ResponsiveComponent'

import styles from './Home.module.css'
import ExitWarningModal from '../../components/ExitWarningModal/ExitWarningModal'

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <p>Home</p>
      <Header />
      {/* <ResponsiveComponent /> */}
      <ExitWarningModal />
    </div>
  )
}

export default Home
