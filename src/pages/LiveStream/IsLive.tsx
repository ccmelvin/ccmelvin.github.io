import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './IsLive.module.css';

const IsLive: React.FC = () => {
  const [isLive, setIsLive] = useState(false);

  const checkLiveStatus = async () => {
    try {
      console.log('Checking live status...');
      const response = await axios.get('http://localhost:3001/api/checkLiveStatus');
      console.log('API Response:', response.data);
      setIsLive(response.data.isLive); // Or response.data.isStreaming if that’s the correct key
    } catch (err) {
      console.warn('Error fetching live status:', err);
      setIsLive(false);
    }
  };

  useEffect(() => {
    checkLiveStatus(); // Initial check when the component mounts

    const interval = setInterval(() => {
      checkLiveStatus(); // Poll every 60 seconds
    }, 60000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <span className={styles.liveIndicator}>
      {isLive ? '🔴 LIVE' : 'Currently Offline'}
    </span>
  );
};

export default IsLive;
