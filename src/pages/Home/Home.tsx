import React from 'react';
import Carousel from '../Carousel/Carousel';
import AboutMe from '../AboutMe/AboutMe';
import LiveStream from '../LiveStream/LiveStream';
import Gallery from '../Gallery/Gallery';
import ContactForm from '../ContactForm/ContactForm';
import Crew from '../Crew/Crew';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.homeWrapper}>
      <Carousel />
      <AboutMe />
      <LiveStream />
      <Gallery />
      <ContactForm />
      <Crew />
    </div>
  );
};

export default Home;
