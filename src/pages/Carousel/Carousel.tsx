import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css';
import us_navy from '../../assets/images/us_navy_01.jpg';
import riodejaneiro_helicopter from '../../assets/images/riodejaneiro_helicopter.jpg';
import american_airlines_01 from '../../assets/images/american_airlines_01.jpg';


interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }

const Carousel: React.FC = () => {
    const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

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
    };

    const photos = [
        { src: us_navy, alt: 'US Navy', description: 'US Navy aircraft performing at the Seymour Johnson AFB air show,May 2023, highlighting the aircraft’s remarkable agility and power against the vast North Carolina skies.', author: 'Colon Melvin' },
        { src: riodejaneiro_helicopter, alt: 'Rio de Janeiro Helicopter', description: 'A breathtaking view of Rio’s Sugarloaf Mountain, taken in April 2024 from a helicopter high above the city.', author: 'Colon Melvin' },
        { src: american_airlines_01, alt: 'American Airlines', description: 'American Airlines Airbus A321 taking off over Balboa Park in San Diego, captured in January 2024 on a clear blue sky day', author: 'Colon Melvin' },
    ];

    return (
        <div className={`slider-container ${styles.carousel}`}>
            <Slider {...settings}>
                {photos.map((photo, index) => (
                    <div key={index} className={styles.slide}>
                        <div className={styles.overlay}>
                            <div className={styles.description}>{photo.description}</div>
                            <div className={styles.author}>Photo by: {photo.author}</div>
                        </div>
                        <img src={photo.src} alt={photo.alt} className={styles.image} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
