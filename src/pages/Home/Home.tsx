import React from 'react';
import Carousel from '../Carousel/Carousel';
import styles from './Home.module.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutMe from '../AboutMe/AboutMe';

const Home: React.FC = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}>
        <Carousel />
        <div className={styles.content}>
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default Home;