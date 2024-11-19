import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { debounce } from "lodash";
import IsLive from "../../pages/LiveStream/IsLive";
import logo from '../../assets/logo/flyby-spotter-logo.png';
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = debounce(() => {
    setScrolled(window.scrollY > 60);
  }, 100);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <NavLink to="/" onClick={closeMenu}>
      <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p className={styles.title}>Flyby Spotter</p>
      </div>
        </NavLink>
      <button 
        className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className={styles.menuIcon} />
      </button>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu} end>
            
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew" onClick={closeMenu}>
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/live-stream" onClick={closeMenu}>
            Live Stream <IsLive />
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
