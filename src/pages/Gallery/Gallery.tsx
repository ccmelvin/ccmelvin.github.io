import React, { useState } from 'react';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { initialGallery } from '../../types/gallery';
import './Gallery.module.css';

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState(initialGallery);

  const handleLike = (id: string) => {
    setGalleryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  return <GalleryCard items={galleryItems} onLike={handleLike} />;
};

export default Gallery;
