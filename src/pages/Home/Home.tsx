import React from "react";
import { Helmet } from "react-helmet-async";
// import Carousel from "../Carousel/Carousel";
import HeroSlider from "../Carousel/HeroSlider";
import AboutMe from "../AboutMe/AboutMe";
import LiveStream from "../LiveStream/LiveStream";
import Gallery from "../Gallery/Gallery";
import ContactForm from "../ContactForm/ContactForm";
import Crew from "../Crew/Crew";
import styles from "./Home.module.css";

// SEO Analysis:
// ✓ Title tag present and descriptive
// ✓ Meta description present and optimal length
// ✓ Keywords meta tag present (though less important for modern SEO)
// ✓ Open Graph tags complete (title, description, type, url, image)
// ✓ Twitter Card tags complete (card type, title, description, image)
// ✓ Canonical URL present
// Recommendations:
// - Consider adding language meta tag
// - Consider adding robots meta tag
// - Consider adding viewport meta tag for mobile optimization


// src/pages/Home/Home.tsx

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          FlyBy Spotter | Live Plane Spotting and Aviation Community
        </title>
        <meta
          name="description"
          content="Join FlyBy Spotter for live plane spotting, airport streams, aviation galleries, and an enthusiastic community of aviation fans. Watch planes arrive and depart from RDU and other major airports."
        />
        <meta
          name="keywords"
          content="plane spotting, live stream, aviation community, RDU airport, aircraft watching, aviation photography"
        />
        <meta name="language" content="en" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="FlyBy Spotter | Live Plane Spotting and Aviation Community"
        />
        <meta
          property="og:description"
          content="Join FlyBy Spotter for live plane spotting, airport streams, aviation galleries, and an enthusiastic community of aviation fans. Watch planes arrive and depart from RDU and other major airports."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flybyspotter.com/" />
        <meta
          property="og:image"
          content="https://www.flybyspotter.com/images/featured-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FlyBy Spotter | Live Plane Spotting and Aviation Community"
        />
        <meta
          name="twitter:description"
          content="Join FlyBy Spotter for live plane spotting, airport streams, aviation galleries, and an enthusiastic community of aviation fans."
        />
        <meta
          name="twitter:image"
          content="https://www.flybyspotter.com/images/featured-image.jpg"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.flybyspotter.com/" />
      </Helmet>

      <div className={styles.homeWrapper}>
        {/* <Carousel /> */}
        <HeroSlider />
        <AboutMe />
        <Crew />
        <LiveStream />
        <Gallery />
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
