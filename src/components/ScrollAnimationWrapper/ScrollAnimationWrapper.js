// src/components/ScrollAnimationWrapper/ScrollAnimationWrapper.js
import React from 'react';
import { motion } from 'framer-motion';

const getAnimationVariants = (type) => {
  switch (type) {
    case 'fadeInUp':
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    case 'fadeInDown':
      return {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      };
    case 'slideInLeft':
      return {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      };
    case 'slideInRight':
      return {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      };
    case 'fadeIn':
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

const ScrollAnimationWrapper = ({ children, animationType = "fadeInUp", delay = 0, duration = 0.8, className, tag = 'div', ...rest }) => {
  const variants = getAnimationVariants(animationType);
  const MotionComponent = motion[tag] || motion.div;


  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // amount: 0.1 means 10% of element in view
      transition={{ duration: duration, delay: delay, ease: [0.22, 1, 0.36, 1] }} // Smooth cubic-bezier
      variants={variants}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default ScrollAnimationWrapper;