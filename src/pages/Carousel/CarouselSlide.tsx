// CarouselSlide.tsx
import React from 'react';
import useResponsiveImageSize from '../../hooks/useResponsiveImageSize';
import styles from './Carousel.module.css';

interface CarouselSlideProps {
  src: string;
  alt: string;
  description: string;
  author: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ src, alt, description, author }) => {
  const imageStyle = useResponsiveImageSize(src);

  return (
    <div className={styles.carouselSlide}>
      <div className={styles.carouselOverlay}>
        <div className={styles.carouselDescription}>{description}</div>
        <div className={styles.carouselAuthor}>Photo by: {author}</div>
      </div>
      <img src={src} alt={alt} style={imageStyle} className={styles.carouselImage} />
    </div>
  );
};

export default CarouselSlide;
