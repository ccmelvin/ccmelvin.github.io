import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Carousel from '../Carousel/Carousel';
import AboutMe from '../AboutMe/AboutMe';
import LiveStream from '../LiveStream/LiveStream';
import Gallery from '../Gallery/Gallery';
import ContactForm from '../ContactForm/ContactForm';
import Crew from '../Crew/Crew';
import styles from './Home.module.css';

const components = [AboutMe, LiveStream, Gallery, ContactForm, Crew];

const Home: React.FC = () => {
  const [items, setItems] = useState<React.ComponentType[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = useCallback(() => {
    if (items.length >= components.length) {
      setHasMore(false);
      return;
    }
    
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, components[prevItems.length]]);
    }, 500);
  }, [items]);

  useEffect(() => {
    fetchMoreData();
  }, [fetchMoreData]);

  return (
    <div className={styles.homeWrapper}>
      <Carousel />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {items.map((Component, index) => (
          <Component key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
