import React, { useLayoutEffect } from 'react';

import { version } from '../../../../package.json';

import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import styles from './styles.module.css';

export const HomePage: React.FC = () => {
  useLayoutEffect(() => {
    // eslint-disable-next-line
    console.log(`Version: ${version}`);
  }, []);

  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <Certifications />
      <Experience />
      <Contact />
    </main>
  );
};
