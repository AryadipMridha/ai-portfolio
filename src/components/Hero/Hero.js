// src/components/Hero/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
// import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.section 
      id="hero" 
      className={styles.heroSection}
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Animate on load
    >
      <div className={`container ${styles.heroContent}`}>
        <motion.p className={styles.heroGreeting} variants={itemVariants}>
          Hello, I am
        </motion.p>
        
        {/* For the gradient name, Framer Motion on a span inside h1 might be better if direct h1 animation conflicts */}
        <motion.h1 className={`hero-name-gradient ${styles.heroName}`} variants={itemVariants}>
          Aryadip
        </motion.h1>
        
        <motion.p className={styles.heroTitle} variants={itemVariants}>
          Data Scientist, Machine Learning & AI Engineer
        </motion.p>

        <motion.p className={styles.heroSpecializations} variants={itemVariants}>
          Specializing in Computer Vision, NLP, LLM Ops & LLM Engineering
        </motion.p>

        <motion.div className={styles.heroButtons} variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(106, 13, 173, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            style={{ marginLeft: '15px' }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(137, 207, 240, 0.6)"}}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;