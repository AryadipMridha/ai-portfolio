// src/components/ThemeToggle/ThemeToggle.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className={styles.themeToggleButton}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1, rotate: theme === 'light' ? 15 : -15 }}
      whileTap={{ scale: 0.9 }}
      key={theme} // Ensures re-render for icon switch animation if any
    >
      {theme === 'light' ? <FaMoon size="1.4em" /> : <FaSun size="1.5em" />}
    </motion.button>
  );
};

export default ThemeToggle;