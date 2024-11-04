import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import IsLive from "../../pages/LiveStream/IsLive";
import styles from "./Navbar.module.css";
import logo from '../../assets/images/logo-final.png';
import { debounce } from "lodash";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 80) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  const handleScroll = debounce(() => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <p className={styles.title}>Flyby Spotter</p>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/live-stream"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Live Stream <IsLive /> {/* Display the live indicator here */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Crew
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
