import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { initialGallery } from '../../types/gallery';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState(initialGallery);

  const handleLike = (id: string) => {
    setGalleryItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  return (
    <>
      <Helmet>
        <title>Aviation Photography Gallery | FlyBy Spotter</title>
        <meta name="description" content="Explore our gallery of stunning aviation photography and plane spotting moments captured from major airports, including RDU. Join the FlyBy Spotter community and like your favorite shots." />
      </Helmet>

      <div className={styles.galleryWrapper}>
        <GalleryCard items={galleryItems} onLike={handleLike} />
      </div>
    </>
  );
};

export default Gallery;
