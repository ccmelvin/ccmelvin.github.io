import React, { useState } from "react";
import styles from "./Crew.module.css";
import { crewContent } from "../../types/crewContent";

const Crew: React.FC = () => {
  const [activeImage, setActiveImage] = useState(
    crewContent.reduce((acc, member) => {
      acc[member.name] = member.image[0]; // Default to the first image for each crew member
      return acc;
    }, {} as Record<string, string>)
  );

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
      {crewContent.map((member) => (
        <section key={member.name} className={styles.crewSection}>
          <div className={styles.crewImageWrapper}>
            {/* Display the active image for the current crew member */}
            <img
              src={activeImage[member.name]}
              alt={member.alt}
              className={styles.crewImage}
            />
            {/* Display the thumbnails for the current crew member */}
            <div className={styles.thumbnailWrapper}>
              {member.image.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${member.name} thumbnail ${index}`}
                  className={styles.thumbnail}
                  onClick={() => handleImageClick(member.name, imgSrc)}
                />
              ))}
            </div>
          </div>
          <div className={styles.crewTextWrapper}>
            <h3 className={styles.crewSubheading}>{member.name}</h3>
            {member.paragraphs.map((paragraph, index) => (
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

export default Crew;
