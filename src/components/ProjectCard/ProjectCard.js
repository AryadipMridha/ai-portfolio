// src/components/ProjectCard/ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './ProjectCard.module.css'; // We'll create this for specific card styling

const ProjectCard = ({ project }) => {
  const { title, tech, description, githubLink, liveLink } = project;

  return (
    <motion.div
      className={`project-card-base ${styles.projectCard}`} // Combines global base with specific
      whileHover={{ 
        y: -8, 
        boxShadow: "0 12px 28px rgba(0,0,0,0.15), 0 8px 10px rgba(0,0,0,0.12)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* h3 styling is handled by .project-card-base h3 in index.css */}
      <h3>{title}</h3>
      <p className={`project-tech ${styles.projectTech}`}>{tech}</p>
      <p className={styles.projectDescription}>{description}</p>
      <div className={`project-links ${styles.projectLinks}`}>
        {githubLink && githubLink !== '#' && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub repository`}
            whileHover={{ scale: 1.1, color: 'var(--baby-blue)' }}
          >
            <FaGithub size="1.2em" /> GitHub
          </motion.a>
        )}
        {liveLink && liveLink !== '#' && (
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo`}
            whileHover={{ scale: 1.1, color: 'var(--baby-blue)' }}
            style={{ marginLeft: githubLink && githubLink !== '#' ? '15px' : '0' }}
          >
            <FaExternalLinkAlt size="1.1em" /> Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;