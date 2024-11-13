import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import us_navy from "../../assets/images/carousel/us_navy_03.png";
import riodejaneiro_helicopter from "../../assets/images/carousel/riodejaneiro_sunset_surgarloaf_01.png";
import american_airlines_01 from "../../assets/images/carousel/american_airlines_02.png";


interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Carousel: React.FC = () => {
  const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} ${styles.arrow} ${styles.nextArrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} ${styles.arrow} ${styles.prevArrow}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    fade: true,
    speed: 1500,
    autoplaySpeed: 5000,
    accessibility: true,
  };

  const photos = [
    {
      src: us_navy,
      alt: "US Navy",
      description:
        "US Navy aircraft performing at the Seymour Johnson AFB air show,May 2023, highlighting the aircraft’s remarkable agility and power against the vast North Carolina skies.",
      author: "Colon Melvin",
    },
    {
      src: riodejaneiro_helicopter,
      alt: "Rio de Janeiro Helicopter",
      description:
        "A breathtaking view of Rio’s Sugarloaf Mountain, taken in April 2024 from a helicopter high above the city.",
      author: "Colon Melvin",
    },
    {
      src: american_airlines_01,
      alt: "American Airlines",
      description:
        "American Airlines Airbus A321 taking off over Balboa Park in San Diego, captured in January 2024 on a clear blue sky day",
      author: "Colon Melvin",
    },
  ];

  return (
    <div className={`slider-container ${styles.carousel}`}>
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index} className={styles.carouselSlide}>
          <div className={styles.carouselOverlay}>
            <div className={styles.carouselDescription}>{photo.description}</div>
            <div className={styles.carouselAuthor}>Photo by: {photo.author}</div>
          </div>
          <img src={photo.src} alt={photo.alt} className={styles.carouselImage} />
        </div>
      ))}
    </Slider>
  </div>
  
  );
};

export default Carousel;
