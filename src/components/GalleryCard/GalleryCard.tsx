import React, { useState } from "react";
import Slider from "react-slick";
import { Heart, Minus } from "lucide-react";
import LazyLoad from "react-lazyload";
import styles from "./GalleryCard.module.css";
import { GalleryItem } from "../../types/gallery";

interface GalleryCardProps {
  items: GalleryItem[];
  onLike: (id: string) => void;
}
const GalleryCard: React.FC<GalleryCardProps> = ({ items, onLike }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(
    items[0] || null
  );

  const [isLiked, setIsLiked] = useState(false);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const handleLikeClick = () => {
    if (!isLiked && selectedItem) {
      onLike(selectedItem.id);
      setIsLiked(true);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!selectedItem) {
    return <p>No items to display.</p>;
  }

  return (
    <div
      className={styles.heroBackground}
      style={{ backgroundImage: `url(${selectedItem.imageUrl})` }}
    >
      {/* Hero Content */}
      <div className={styles.heroContent}>
        <Minus className={styles.minusIcon} aria-hidden="true" />
        <h1 className={styles.heroTitle}>{selectedItem.title}</h1>
        <p className={styles.heroDescription}>{selectedItem.description}</p>
        <p className={styles.heroContent2}>{selectedItem.content}</p>
        {/* <button className={styles.heroButton} aria-label="Discover Location">
          Discover Location
        </button> */}

        {/* Like Button */}
        <div
          className={styles.likeButton}
          onClick={handleLikeClick}
          role="button"
          aria-pressed={isLiked}
          tabIndex={0}
        >
          <Heart 
            className={`${styles.heartIcon} ${isLiked ? styles.active : ''}`} 
            aria-hidden="true"
            fill={isLiked ? "#ff4081" : "none"}
          />
          <span>{selectedItem.likes}</span>
        </div>
      </div>

      {/* Thumbnail Slider */}
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {items.map((item) => (
            <div
              key={item.id}
              className={styles.sliderItem}
              onClick={() => handleItemClick(item)}
              role="button"
              aria-pressed={selectedItem.id === item.id ? "true" : "false"}
              aria-label={`View image ${item.title}`}
              tabIndex={0}
            >
              <LazyLoad
                height={260}
                offset={100}
                placeholder={<div className={styles.placeholder}></div>}
              >
                <img
                  src={item.imageUrl}
                  srcSet={`${item.imageUrl} 300w, ${item.imageUrl} 600w, ${item.imageUrl} 900w`}
                  sizes="(max-width: 600px) 300px, (max-width: 1024px) 600px, 900px"
                  alt={item.altText}
                  className={`${styles.sliderImage} ${
                    selectedItem.id === item.id ? styles.activeThumbnail : ""
                  }`}
                  loading="lazy"
                />
              </LazyLoad>

              <div className={styles.sliderOverlay}>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryCard;
