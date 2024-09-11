import React from 'react';
import styles from './LiveStream.module.css';

const LiveStream: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.latestText}>Latest Video</p>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/-MSeFt1xec4`}
        title="FlyBy Spotter - Latest Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default LiveStream;
