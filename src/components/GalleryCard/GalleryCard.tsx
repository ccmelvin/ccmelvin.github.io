import React, { useState } from "react";
import Slider from "react-slick";
import { Heart, Minus } from "lucide-react";
import styles from "./GalleryCard.module.css";
import { GalleryItem } from "../../types/gallery";

interface GalleryCardProps {
  items: GalleryItem[];
  onLike: (id: string) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ items, onLike }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(
    items[0]
  );

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: false,
  };

  return (
    <div
      className={styles.heroBackground}
      style={{ backgroundImage: `url(${selectedItem?.imageUrl})` }}
    >
      <div className={styles.heroContent}>
        <Minus className={styles.minusIcon} />
        <h1 className={styles.heroTitle}>{selectedItem?.title || ""}</h1>
        <p className={styles.heroDescription}>
          {selectedItem?.description || ""}
        </p>
        <p className={styles.heroContent2}>{selectedItem?.content || ""}</p>
        <button className={styles.heroButton}>Discover Location</button>
        <div
          className={styles.likeButton}
          onClick={() => onLike(selectedItem?.id || "")}
        >
          <Heart className={styles.heartIcon} />
          <span>{selectedItem?.likes || 0}</span>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {items.map((item) => (
            <div
              key={item.id}
              className={styles.sliderItem}
              onClick={() => handleItemClick(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className={styles.sliderImage}
              />
              <div className={styles.sliderOverlay}>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const SampleNextArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <div className={`${styles.arrow} ${styles.next}`} onClick={onClick} />
    );
  };
  
  const SamplePrevArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick} />
    );
  };
  
export default GalleryCard;
