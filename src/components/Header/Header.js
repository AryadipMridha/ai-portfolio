// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.css';

const Header = ({ currentTheme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`${styles.mainHeader} ${scrolled ? styles.scrolled : ''}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <nav className={`container ${styles.navContainer}`}>
        <motion.a
          href="#hero"
          className={styles.navLogo}
          whileHover={{ scale: 1.05, textShadow: "0px 0px 6px var(--baby-blue)" }}
        >
          Aryadip
        </motion.a>
        
        <ul className={styles.navLinksDesktop}>
          {navLinks.map((link) => (
            <motion.li 
              key={link.href} 
              whileHover={{ y: -2, color: 'var(--lavender)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={link.href}>{link.label}</a>
            </motion.li>
          ))}
        </ul>

        <div className={styles.headerControls}>
          <ThemeToggle theme={currentTheme} toggleTheme={toggleTheme} />
          <button className={styles.mobileMenuButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className={styles.navLinksMobile}>
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={mobileLinkVariants}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href={link.href}>{link.label}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;