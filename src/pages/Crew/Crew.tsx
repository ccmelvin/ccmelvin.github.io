

import React, { useState } from "react";
import styles from "./Crew.module.css";
import { crewContent } from "../../types/crewContent";
import InfiniteScroll from 'react-infinite-scroll-component';

const Crew: React.FC = () => {
  const [items, setItems] = useState(crewContent.slice(0, 3));
  const [hasMore, setHasMore] = useState(true);

  const [activeImage, setActiveImage] = useState(
    crewContent.reduce((acc, member) => {
      acc[member.name] = member.image[0];
      return acc;
    }, {} as Record<string, string>)
  );

  const handleImageClick = (crewMember: string, image: string) => {
    setActiveImage((prev) => ({ ...prev, [crewMember]: image }));
  };

  const fetchMoreData = () => {
    if (items.length >= crewContent.length) {
      setHasMore(false);
      return;
    }
    
    setTimeout(() => {
      setItems(items.concat(crewContent.slice(items.length, items.length + 3)));
    }, 500);
  };

  return (
    <div className={styles.crewContainer}>
      <h2 className={styles.crewHeading}>Meet the Team: Stories Behind the Lens</h2>
      <p className={styles.crewParagraphTitle}>
        Our team brings together a blend of diverse experiences, creative
        passions, and a shared love for storytelling, both on the ground and in
        the skies.
      </p>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {items.map((member) => (
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
              <h3 className={styles.crewSubheading}>{member.name}</h3>
              {member.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.crewParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </InfiniteScroll>
    </div>
  );
};
export default Crew;
