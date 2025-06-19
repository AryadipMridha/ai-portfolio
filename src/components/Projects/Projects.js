// src/components/Projects/Projects.js
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper';
import { projectsData } from '../../data/projectsData';
import styles from './Projects.module.css'; // For the grid layout

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <ScrollAnimationWrapper animationType="fadeIn" tag="h2">
          Projects
        </ScrollAnimationWrapper>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ScrollAnimationWrapper
              key={project.id}
              animationType="fadeInUp"
              delay={index * 0.1} // Stagger animation
              className={styles.projectGridItem} // Apply to the wrapper for grid item behavior
            >
              <ProjectCard project={project} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;