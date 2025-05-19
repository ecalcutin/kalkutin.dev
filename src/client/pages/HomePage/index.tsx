import React from 'react';

import { Hero } from './components/Hero';
import styles from './styles.module.css';

export const HomePage: React.FC = () => {
  return (
    <main className={styles.container}>
      <Hero />
    </main>
  );
};
