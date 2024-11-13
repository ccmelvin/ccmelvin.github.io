import React from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from '../Carousel/Carousel';
import AboutMe from '../AboutMe/AboutMe';
import LiveStream from '../LiveStream/LiveStream';
import Gallery from '../Gallery/Gallery';
import ContactForm from '../ContactForm/ContactForm';
import Crew from '../Crew/Crew';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FlyBy Spotter | Live Plane Spotting and Aviation Community</title>
        <meta 
          name="description" 
          content="Join FlyBy Spotter for live plane spotting, airport streams, aviation galleries, and an enthusiastic community of aviation fans. Watch planes arrive and depart from RDU and other major airports." 
        />
        <meta 
          name="keywords" 
          content="plane spotting, live stream, aviation community, RDU airport, aircraft watching, aviation photography" 
        />
        
        {/* Open Graph and Twitter Metadata */}
        <meta property="og:title" content="FlyBy Spotter | Live Plane Spotting and Aviation Community" />
        <meta property="og:description" content="Join FlyBy Spotter for live plane spotting, airport streams, aviation galleries, and an enthusiastic community of aviation fans. Watch planes arrive and depart from RDU and other major airports." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta property="og:image" content="https://www.yourwebsite.com/images/featured-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FlyBy Spotter | Live Plane Spotting and Aviation Community" />
        <meta name="twitter:description" content="Join FlyBy Spotter for live plane spotting, airport streams, aviation galleries, and an enthusiastic community of aviation fans." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/images/featured-image.jpg" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.yourwebsite.com/" />
      </Helmet>

      <div className={styles.homeWrapper}>
        <Carousel />
        <AboutMe />
        <LiveStream />
        <Gallery />
        <ContactForm />
        <Crew />
      </div>
    </>
  );
};

export default Home;
