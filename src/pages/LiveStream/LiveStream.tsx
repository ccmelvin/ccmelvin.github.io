import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './LiveStream.module.css';

const LiveStream: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Live RDU Airport Stream | Plane Spotting in Raleigh-Durham | FlyBy Spotter</title>
        <meta name="description" content="Watch live plane spotting at Raleigh-Durham International Airport (RDU). See real-time aircraft arrivals and departures with our live stream from RDU." />
        <meta name="keywords" content="RDU live stream, Raleigh-Durham airport, live plane spotting, RDU arrivals, RDU departures, aviation community" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Live RDU Airport Stream | Plane Spotting in Raleigh-Durham" />
        <meta property="og:description" content="Watch live plane spotting at Raleigh-Durham International Airport (RDU). See real-time aircraft arrivals and departures with our live stream from RDU." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/rdu-live-stream" />
        <meta property="og:image" content="https://www.yourwebsite.com/images/rdu-stream-preview.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Live RDU Airport Stream | Plane Spotting in Raleigh-Durham" />
        <meta name="twitter:description" content="Watch live plane spotting at Raleigh-Durham International Airport (RDU). See real-time aircraft arrivals and departures with our live stream from RDU." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/images/rdu-stream-preview.jpg" />

        {/* Canonical link */}
        <link rel="canonical" href="https://www.yourwebsite.com/rdu-live-stream" />

        {/* Structured Data for VideoObject with RDU location */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Live RDU Airport Stream | Plane Spotting in Raleigh-Durham",
              "description": "Watch live plane spotting at Raleigh-Durham International Airport (RDU). See real-time aircraft arrivals and departures with our live stream from RDU.",
              "thumbnailUrl": "https://www.yourwebsite.com/images/rdu-stream-preview.jpg",
              "uploadDate": "2024-01-01T08:00:00+08:00",
              "contentUrl": "https://www.youtube.com/embed/-MSeFt1xec4",
              "embedUrl": "https://www.youtube.com/embed/-MSeFt1xec4",
              "interactionCount": "2347",
              "duration": "PT2H",
              "isLiveBroadcast": true,
              "locationCreated": {
                "@type": "Place",
                "name": "Raleigh-Durham International Airport",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2400 John Brantley Blvd",
                  "addressLocality": "Morrisville",
                  "addressRegion": "NC",
                  "postalCode": "27560",
                  "addressCountry": "US"
                }
              }
            }
          `}
        </script>
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
      </div>
    </>
  );
};

export default LiveStream;
