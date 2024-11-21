import React from 'react';
import styles from './AboutMe.module.css';
import profile from '../../assets/images/crew/gustavo-airplane-sao-paulo.jpg';

const AboutMe: React.FC = () => {
  return (
    <main className={styles.aboutMe} role="main">
      <img 
        src={profile} 
        alt="Gustavo standing next to an airplane in São Paulo" 
        className={styles.profileImage}
        loading="lazy"
      />
      <div className={styles.aboutMeContent}>
      <h1>My story <span className={styles.titleDot} aria-hidden="true">.</span></h1>
      <p>Hello, and welcome to FlyBy Spotter!</p>

      <p>
        I'm Gustavo, an aviation enthusiast with a lifelong passion for airplanes. My story begins in São Paulo,
        where I grew up just a stone's throw away from Guarulhos Airport, the busiest in Latin America. Living so close
        to the constant hum of jet engines and the thrill of takeoffs and landings, it was inevitable that I'd develop a
        deep love for aviation.
      </p>

      <p>
        One of my most cherished memories is my first time inside an airplane—a moment that changed my life forever. My
        uncle, who worked for the legendary airline Varig, took me on an exclusive tour of a Varig Jumbo 747. As soon as I
        stepped inside that magnificent aircraft, I knew that airplanes would forever hold a special place in my heart. It
        was an experience that left an incredible mark on me, igniting a passion that continues to this day.
      </p>

      <p>
        As a teenager, I even began taking classes to pursue my dream of becoming a pilot. Unfortunately, life had other plans,
        and I had to put that dream on hold for various reasons. However, the passion never faded. Today, I find joy in sharing
        that love of aviation with others through this website and live stream, and I'm incredibly proud that my son is now
        following in my footsteps, chasing the very dream that once fueled my own ambitions.
      </p>

      <p>
        FlyBy Spotter is a place for fellow aviation enthusiasts, spotters, and curious minds to come together and share in the
        excitement of flight. Whether you're a seasoned spotter or just beginning to explore the world of aviation, I hope you
        find something here that resonates with your love for airplanes.
      </p>

      <p>Thank you for stopping by, and happy spotting!</p>
      </div>
    </main>
  );
};
export default AboutMe;
