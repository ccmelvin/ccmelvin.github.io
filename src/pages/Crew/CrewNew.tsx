import React, { useState } from "react";
import styles from "./Crew.module.css";

// Importing crew images
import victoria from "../../assets/images/victoria.jpg";
import victoriaAdditional1 from "../../assets/images/brazil_familiy_photo_02.jpg";
import victoriaAdditional2 from "../../assets/images/air_plane_02.jpg";
import gustavinho from "../../assets/images/gustavo_son_pilot_01.jpg";
import gustavinhoAdditional1 from "../../assets/images/air_plane_07.jpg";
import cassia from "../../assets/images/cassia_03.jpg";
import cassiaAdditional1 from "../../assets/images/cassia_02.jpg";
import colonMelvin from "../../assets/images/colon_melvin.jpg";
import colonAdditional1 from "../../assets/images/Cassia-Melvin_WebDesign.jpg";

const CrewNew: React.FC = () => {
  const [activeImage, setActiveImage] = useState({
    Victoria: victoria,
    Gustavo: gustavinho,
    Cassia: cassia,
    Colon: colonMelvin,
  });

  const crewData = {
    Victoria: {
      images: [victoria, victoriaAdditional1, victoriaAdditional2],
      name: "Victoria",
      description: [
        "I’ve called Raleigh, NC, home for as long as I can remember, but my family's heritage is from Laos, and that’s a big part of who I am.",
        "Growing up surrounded by Lao culture and amazing Asian food has shaped my love for exploring different flavors and cuisines.",
        "If there's one place that truly stole my heart, it’s Thailand. The food, the landscapes, the warmth of the people—it’s like nothing else.",
      ],
    },
    Gustavo: {
      images: [gustavinho, gustavinhoAdditional1],
      name: "Gustavo (Son)",
      description: [
        "The year of 2024 has been a year of incredible milestones for me. I was born in Mirassol, São Paulo, Brazil.",
        "This year, I graduated from Leesville High School in NC and started following my dream of becoming a pilot.",
        "One thing that will always connect me to my hometown is my love for Mirassol FC, the local soccer team.",
      ],
    },
    Cassia: {
      images: [cassia, cassiaAdditional1],
      name: "Cassia",
      description: [
        "I was born and raised in Guarulhos, São Paulo, Brazil, but now I call Cary, NC, home.",
        "One of my greatest passions is cooking, but my heart also belongs to design, especially the world of perfume.",
        "I’ve taken that passion for design and turned it into a career as a front-end engineer.",
      ],
    },
    Colon: {
      images: [colonMelvin, colonAdditional1],
      name: "Colon",
      description: [
        "Born and raised in NC, photography has always been my creative outlet.",
        "One day, I hope to have more time to pursue my other passion—flying. Getting my private pilot’s license has been a goal of mine.",
        "When I’m not working or out with my camera, I enjoy running and keeping up with sports.",
      ],
    },
  };

  const handleImageClick = (crewMember: string, image: string) => {
    setActiveImage((prev) => ({ ...prev, [crewMember]: image }));
  };

  return (
    <div className={styles.crewContainer}>
      <h2 className={styles.crewHeading}>
        Meet the Team: Stories Behind the Lens
      </h2>
      <p className={styles.crewParagraphTitle}>
        Our team brings together a blend of diverse experiences, creative
        passions, and a shared love for storytelling, both on the ground and in
        the skies.
      </p>

      {Object.keys(crewData).map((key) => (
        <section key={key} className={styles.crewSection}>
          <div className={styles.crewImageWrapper}>
            <img
              src={activeImage[key]}
              alt={crewData[key].name}
              className={styles.crewImage}
            />
            <div className={styles.thumbnailWrapper}>
              {crewData[key].images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${crewData[key].name} ${index}`}
                  className={styles.thumbnail}
                  onClick={() => handleImageClick(key, image)}
                />
              ))}
            </div>
          </div>
          <div className={styles.crewTextWrapper}>
            <h3 className={styles.crewSubheading}>{crewData[key].name}</h3>
            {crewData[key].description.map((paragraph, index) => (
              <p key={index} className={styles.crewParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CrewNew;
