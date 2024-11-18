import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import usNavy from "../../assets/images/carousel/american-airlines-airbus-a321-takeoff.jpg";
import rioDeJaneiroHelicopter from "../../assets/images/carousel/rio-de-janeiro-sugarloaf-mountain-helicopter-view.jpg";
import americanAirlines01 from "../../assets/images/carousel/us-navy-aircraft-north-carolina-airshow.jpg";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 1500,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    arrows: true,
  };

  const photos = [
    {
      src: usNavy,
      alt: "US Navy aircraft performing at North Carolina air show in 2023",
      srcSmall: usNavy,
      srcMedium: usNavy,
      srcLarge: usNavy,
      description: "US Navy aircraft performing at the Seymour Johnson AFB air show, May 2023.",
      author: "Colon Melvin",
    },
    {
      src: rioDeJaneiroHelicopter,
      alt: "Helicopter view over Rio de Janeiro's Sugarloaf Mountain during sunset",
      srcSmall: rioDeJaneiroHelicopter,
      srcMedium: rioDeJaneiroHelicopter,
      srcLarge: rioDeJaneiroHelicopter,
      description: "A breathtaking view of Rio's Sugarloaf Mountain, taken in April 2024.",
      author: "Colon Melvin",
    },
    {
      src: americanAirlines01,
      alt: "American Airlines Airbus A321 taking off over Balboa Park in San Diego",
      srcSmall: americanAirlines01,
      srcMedium: americanAirlines01,
      srcLarge: americanAirlines01,
      description: "American Airlines Airbus A321 taking off over Balboa Park in San Diego.",
      author: "Colon Melvin",
    },
  ];

  return (
    <div className={styles.carouselSlider}>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.carouselSlide}>
            <div className={styles.carouselOverlay}>
              <div className={styles.carouselDescription}>
                {photo.description}
              </div>
              <div className={styles.carouselAuthor}>
                Photo by: {photo.author}
              </div>
            </div>
            <img
              src={photo.src}
              srcSet={`${photo.srcSmall} 480w, ${photo.srcMedium} 768w, ${photo.srcLarge} 1024w`}
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1024px"
              alt={photo.alt}
              className={styles.carouselImage}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;