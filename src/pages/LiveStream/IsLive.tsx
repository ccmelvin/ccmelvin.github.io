import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './IsLive.module.css';

const IsLive: React.FC = () => {
  const [isLive, setIsLive] = useState(false);

  const checkLiveStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/checkLiveStatus');
      setIsLive(response.data.isLive); // Or response.data.isStreaming if that’s the correct key
    } catch (err) {
      setIsLive(false);
    }
  };

  useEffect(() => {
    checkLiveStatus();
    const interval = setInterval(() => {
      checkLiveStatus();
    }, isLive ? 60000 : 300000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <span className={`${styles.liveIndicator} ${isLive ? styles.active : ''}`}>
      {isLive ? '🔴 LIVE' : ''}
    </span>
  );
};

export default IsLive;
