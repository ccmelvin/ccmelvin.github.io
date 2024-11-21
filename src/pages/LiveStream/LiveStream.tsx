import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styles from "./LiveStream.module.css";

interface YouTubeVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

const LiveStream: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/youtube-videos");
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Helmet>
        <title>Live RDU Airport Stream | Plane Spotting in Raleigh-Durham | FlyBy Spotter</title>
        <meta name="description" content="Watch live plane spotting at Raleigh-Durham International Airport (RDU). See real-time aircraft arrivals and departures with our live stream from RDU." />
      </Helmet>

      <div className={styles.container}>
        <p className={styles.latestText}>Live from RDU: Watch Planes Arrive and Depart at Raleigh-Durham Airport</p>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/-MSeFt1xec4"
          title="Live RDU Airport Stream - FlyBy Spotter"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />


      {/* Video Gallery Section */}
      {/* <h2 className={styles.galleryTitle}>Recent Videos</h2> */}
      {loading ? (
        <p>Loading videos...</p>
      ) : (
        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.thumbnail}
                  src={video.thumbnail}
                  alt={video.title}
                />
              </a>
              <h3 className={styles.videoTitle}>{video.title}</h3>
            </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
};

export default LiveStream;