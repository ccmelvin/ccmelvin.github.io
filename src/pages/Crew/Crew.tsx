import React from 'react';
import styles from './Crew.module.css';

import victoria from '../../assets/images/air_plane_01.jpg';
import gustavinho from '../../assets/images/gustavo_son_pilot_01.jpg';
import cassia from '../../assets/images/cassia_03.jpg';
import colonMelvin from '../../assets/images/colon_melvin.jpg';

const Crew: React.FC = () => {
  return (
    <div className={styles.crewContainer}>
      <h2 className={styles.crewHeading}>Mastering Composition in Cinematic Photography</h2>
      <section className={styles.crewSection}>
        <img src={victoria} alt="Instant Photo" className={styles.crewImage} />
        <div className={styles.crewTextWrapper}>
          <h3 className={styles.crewSubheading}>
            Victoria Cavalheiro
          </h3>
          <p className={styles.crewParagraph}>
            Learn how to take stunning photos, grow your photography business, and create a life you love.
            Get started with our free comprehensive guides and inspiration for your photography business. 
            Whether you're a beginner or a seasoned pro, we have something for everyone.
          </p>
        </div>
      </section>
      <section className={styles.crewSection}>
        <img src={gustavinho} alt="Gustavo Son Student Pilot" className={styles.crewImage} />
        <div className={styles.crewTextWrapper}>
          <h3 className={styles.crewSubheading}>Gustavo Uliana</h3>
          <p className={styles.crewParagraph}>
            The joy of cinematic photography, a medium that merges the visual storytelling elements of film and the singular,
            crystallized moments captured in still photography. To experience life through this lens is like dancing between
            the realms of fantasy and reality. Each frame is not merely a snapshot, but a tale whispered through light, shadow,
            and the artful manipulation of time. It's a poetry of pixels and film grain, if you will.
          </p>
        </div>
      </section>
      <section className={styles.crewSection}>
        <img src={cassia} alt="Photo Editing" className={styles.crewImage} />
        <div className={styles.crewTextWrapper}>
          <h3 className={styles.crewSubheading}>Cassia Melvin</h3>
          <p className={styles.crewParagraph}>
            Welcome, I'm Finn — your guide through a realm where photography transforms into cinematic art. 
            As an award-winning visionary, I don't just capture moments; I turn them into emotional experiences. 
            Dive into my portfolio, and you'll find more than images—you'll discover stories waiting to sweep you off your feet.
          </p>
        </div>
      </section>
      <section className={styles.crewSection}>
        <img src={colonMelvin} alt="Photo Editing" className={styles.crewImage} />
        <div className={styles.crewTextWrapper}>
          <h3 className={styles.crewSubheading}>Colon Melvin</h3>
          <p className={styles.crewParagraph}>
            Welcome, I'm Finn — your guide through a realm where photography transforms into cinematic art. 
            As an award-winning visionary, I don't just capture moments; I turn them into emotional experiences. 
            Dive into my portfolio, and you'll find more than images—you'll discover stories waiting to sweep you off your feet.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Crew;
