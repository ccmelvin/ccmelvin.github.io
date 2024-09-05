import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.connect}>
          <p className={styles.title}>Flyby Spotter</p>
          <div className={styles.contactInfo}>
            <p>
              <FaEnvelope className={styles.icon} /> info@flybyspotter.com
            </p>
            <p>
              <FaWhatsapp className={styles.icon} /> +1 555 555 5555
            </p>
          </div>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.facebook.com/orlandocleaningsolutionsllc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/flyby_spotter/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@FlyBySpotter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h3>MENU</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.categories}>
          <h3>CATEGORIES</h3>
          <ul>
            <li>Live Stream</li>
            <li>Gallery</li>

            <li>Crew</li>
          </ul>
        </div>
      </div>
      <p className={styles.copywrite}>
        &copy; 2024 Flyby Spotter.
      </p>
    </div>
  );
};

export default Footer;
