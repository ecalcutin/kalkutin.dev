import React, { useLayoutEffect } from 'react';

import { version } from '../../../../package.json';

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
    </main>
  );
};
