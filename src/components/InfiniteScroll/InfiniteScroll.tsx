import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './InfiniteScroll.module.css'; // Assuming you have some styles

interface Item {
  id: number;
  text: string;
}

const InfiniteScroll: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/api/data?page=${pageNumber}`);
      const newItems = response.data.data;
  
      // Prevent adding duplicate items
      setData(prevData => {
        const uniqueItems = newItems.filter(newItem => 
          !prevData.some(prevItem => prevItem.id === newItem.id)
        );
        return [...prevData, ...uniqueItems];
      });
      
      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchData(page); // Fetch data on page change
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;

      if (windowHeight + scrollTop + 10 >= documentHeight && hasMore && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div className={styles.container}>
      <h1>Infinite Scroll</h1>
      <div className={styles.items}>
        {data.map((item, index) => (
          // Use a combination of id and index to ensure uniqueness
          <div key={`${item.id}-${index}`} className={styles.item}>
            <h2>{item.text}</h2>
          </div>
        ))}
      </div>
      {loading && <p>Loading more data...</p>}
      {!hasMore && <p>No more data to load</p>}
    </div>
  );
  
};

export default InfiniteScroll;
