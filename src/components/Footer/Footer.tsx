import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.connect}>
          <p className={styles.title}>Flyby Spotter</p>
          <div className={styles.contactInfo}>
            <p className={styles.email}>
              <FaEnvelope className={styles.icon} /> 
              <a href="mailto:FlyBYass@gmail.com">FlyBYass@gmail.com</a>
            </p>
            <p className={styles.phone}>
              <FaWhatsapp className={styles.icon} /> +1 555 555 5555
            </p>
          </div>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.facebook.com/orlandocleaningsolutionsllc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/flyby_spotter/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@FlyBySpotter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h3>MENU</h3>
          <ul>
            <li>
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.categories}>
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <NavLink to="/live-stream" onClick={() => window.scrollTo(0, 0)}>Live Stream</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={() => window.scrollTo(0, 0)}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/crew" onClick={() => window.scrollTo(0, 0)}>Crew</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        © 2024 Flyby Spotter.
      </p>
    </div>
  );
};

export default Footer;