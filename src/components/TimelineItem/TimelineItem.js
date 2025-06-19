// src/components/TimelineItem/TimelineItem.js
import React from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper';
import styles from './TimelineItem.module.css';

const TimelineItem = ({ item, isLeft }) => {
  const { title, period, institution, details } = item;
  const animationType = isLeft ? "slideInLeft" : "slideInRight";

  return (
    <ScrollAnimationWrapper
      animationType={animationType}
      className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
      delay={0.1} // Slight delay for individual items
    >
      <div className={styles.timelineContent}>
        <h3>{title}</h3> {/* This will use global h3 style with lavender color */}
        <p className={styles.timelineDate}>{period}</p>
        <p className={styles.timelineInstitution}>{institution}</p>
        {details && (
          <ul className={styles.detailsList}>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </ScrollAnimationWrapper>
  );
};

export default TimelineItem;