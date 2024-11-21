import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { db } from '../../firebaseConfig';
import { doc, updateDoc, collection, getDocs } from 'firebase/firestore';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { initialGallery } from '../../types/gallery';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState(initialGallery);

  useEffect(() => {
    const fetchLikes = async () => {
      const galleryCollection = collection(db, 'gallery');
      const snapshot = await getDocs(galleryCollection);
      
      const updatedItems = galleryItems.map(item => {
        const firestoreDoc = snapshot.docs.find(doc => doc.id === item.id);
        return firestoreDoc 
          ? { ...item, likes: firestoreDoc.data().likes || 0 }
          : item;
      });
      
      setGalleryItems(updatedItems);
      console.log('Updated gallery items:', updatedItems);
    };

    fetchLikes();
  }, []);

  const handleLike = async (id: string) => {
    const galleryRef = doc(db, 'gallery', id);
    
    try {
      const item = galleryItems.find(item => item.id === id);
      if (item) {
        await updateDoc(galleryRef, {
          likes: (item.likes || 0) + 1
        });

        setGalleryItems(prevItems =>
          prevItems.map(item =>
            item.id === id ? { ...item, likes: (item.likes || 0) + 1 } : item
          )
        );
      }
    } catch (error) {
      console.error('Error updating likes:', error);
    }
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