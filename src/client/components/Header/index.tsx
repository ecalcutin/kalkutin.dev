import React from 'react';

import styles from './styles.module.css';
import { WebsiteLogo } from './website-logo';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        <div className={styles.logo}>
          <a href='/' aria-label='home'>
            <WebsiteLogo />
          </a>
        </div>

        <div>
          <ol className={styles.links}>
            <li>About</li>
            <li>Certifications</li>
            <li>Experience</li>
            <li>Contact</li>
          </ol>
        </div>
      </nav>
    </header>
  );
};
