// src/components/Footer/Footer.js
import React from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Example icons
// import styles from './Footer.module.css'; // If specific styles needed beyond global

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '40px 0' }}>
      <div className="container">
        <ScrollAnimationWrapper animationType="fadeIn" delay={0} className="footer-social-links" tag="div">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          {/* Add other social links as needed */}
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="fadeIn" delay={0.1} tag="p" className="footer-text">
          © {currentYear} Aryadip. All rights reserved.
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="fadeIn" delay={0.2} tag="p" className="footer-text">
          Designed with <span style={{ color: 'var(--lavender)' }}>❤</span> and a touch of <span style={{ color: 'var(--baby-blue)' }}>AI</span>.
        </ScrollAnimationWrapper>
      </div>
    </footer>
  );
};

export default Footer;