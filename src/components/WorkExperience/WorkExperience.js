// src/components/WorkExperience/WorkExperience.js
import React from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper';
import { experienceData } from '../../data/experienceData';
// import styles from './WorkExperience.module.css'; // Create if specific styles are needed

const WorkExperience = () => {
  return (
    <section id="experience">
      <div className="container">
        <ScrollAnimationWrapper animationType="fadeIn" tag="h2">
          Work Experience
        </ScrollAnimationWrapper>
        <div className="timeline"> {/* Global timeline class from index.css */}
          {experienceData.map((expItem) => (
            <TimelineItem 
              key={expItem.id} 
              item={expItem} 
              isLeft={expItem.isLeft} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;