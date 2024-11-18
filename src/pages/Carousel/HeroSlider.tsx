import React, { useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";
import americanAirlines01 from "../../assets/images/carousel/american-airlines-airbus-a321-takeoff.jpg";
import usNavy from "../../assets/images/carousel/us-navy-aircraft-north-carolina-airshow.jpg";
import rioDeJaneiroHelicopter from "../../assets/images/carousel/rio-de-janeiro-sugarloaf-mountain-helicopter-view.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HeroSlider: React.FC = () => {
  const slides = [
    {
      src: usNavy,
      srcSet: `${usNavy} 640w, ${usNavy} 1024w, ${usNavy} 1920w`,
      title: "Flyby Spotter - US Navy Aircraft",
      alt: "US Navy aircraft performing at the Seymour Johnson AFB air show in May 2023",
      description: "US Navy aircraft performing at the Seymour Johnson AFB air show, May 2023.",
      author: "Colon Melvin",
    },
    {
      src: rioDeJaneiroHelicopter,
      srcSet: `${rioDeJaneiroHelicopter} 640w, ${rioDeJaneiroHelicopter} 1024w, ${rioDeJaneiroHelicopter} 1920w`,
      title: "Flyby Spotter - Rio Helicopter View",
      alt: "Helicopter view over Rio de Janeiro's Sugarloaf Mountain during sunset",
      description: "A breathtaking view of Rio's Sugarloaf Mountain, taken in April 2024.",
      author: "Colon Melvin",
    },
    {
      src: americanAirlines01,
      srcSet: `${americanAirlines01} 640w, ${americanAirlines01} 1024w, ${americanAirlines01} 1920w`,
      title: "Flyby Spotter - American Airlines Airbus A321",
      alt: "American Airlines Airbus A321 taking off over Balboa Park in San Diego",
      description: "American Airlines Airbus A321 taking off over Balboa Park in San Diego.",
      author: "Colon Melvin",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <section aria-labelledby="hero-slider-title" className={styles.heroSlider}>
      <h1 id="hero-slider-title" className={styles.visuallyHidden}>
  Flyby Spotter Hero Slider
</h1>
      <div className={styles.sliderWrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
            role="tabpanel"
            aria-hidden={index !== currentSlide}
          >
            <picture>
              <source srcSet={slide.srcSet} sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px" />
              <img
                src={slide.src}
                alt={slide.alt}
                className={styles.image}
                loading="lazy"
              />
            </picture>
            <div className={styles.overlay}>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.author}>Photo by: {slide.author}</div>
            </div>
          </div>
        ))}
        <button
          onClick={goToPreviousSlide}
          className={styles.navButton}
          aria-label="Previous Slide"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={goToNextSlide}
          className={styles.navButton}
          aria-label="Next Slide"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
