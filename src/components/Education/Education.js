// src/components/Education/Education.js
import React from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper';
import { educationData } from '../../data/educationData'; // Assuming you created this
// import styles from './Education.module.css'; // If specific styles are needed

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <ScrollAnimationWrapper animationType="fadeIn" tag="h2">
          Education
        </ScrollAnimationWrapper>
        <div className="timeline"> {/* Global timeline class from index.css */}
          {educationData.map((eduItem) => (
            <TimelineItem 
              key={eduItem.id} 
              item={eduItem} 
              isLeft={eduItem.isLeft} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Education;