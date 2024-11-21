  import React, { useState } from "react";
  import { Helmet } from "react-helmet-async";
  import styles from "./Crew.module.css";
  import { crewContent } from "../../types/crewContent";

  const Crew: React.FC = () => {
    const [activeImage, setActiveImage] = useState(
      crewContent.reduce((acc, member) => {
        acc[member.name] = member.image[0];
        return acc;
      }, {} as Record<string, string>)
    );

    const handleImageClick = (crewMember: string, image: string) => {
      setActiveImage((prev) => ({ ...prev, [crewMember]: image }));
    };

    return (
      <main className={styles.crewContainer}>
        <Helmet>
          <title className={styles.crewParagraphTitle}>Meet the Team: Stories Behind the Lens</title>
          <meta name="description" content="Discover the stories and experiences of our diverse team of storytellers." />
        </Helmet>
        <header>
          <h1 className={styles.crewHeading}>Meet the Team: Stories Behind the Lens</h1>
        </header>
        <p className={styles.crewParagraphTitle}>
          Our team brings together a blend of diverse experiences, creative
          passions, and a shared love for storytelling, both on the ground and in
          the skies.
        </p>
        {crewContent.map((member) => (
          <section key={member.name} className={styles.crewSection}>
            <div className={styles.crewImageWrapper}>
              <img
                src={activeImage[member.name]}
                alt={member.alt}
                className={styles.crewImage}
              />
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
              <h2 className={styles.crewSubheading}>{member.name}</h2>
              {member.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.crewParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </main>
    );
  };

  export default Crew;