import React from 'react';

import { Logo } from './components/logo';
import { Navigation } from './components/navigation';
import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
};
