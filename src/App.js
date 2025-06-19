import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css'; // For any App-level layout styles

function App() {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme');
    return localTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Header currentTheme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Education />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;