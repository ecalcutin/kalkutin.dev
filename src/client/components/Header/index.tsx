import React from 'react';

import { Logo } from './Logo';
import styles from './header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a href='/' aria-label='home'>
          <Logo />
        </a>
        <ol>
          <li>
            <a href='/#about'>About</a>
          </li>
          <li>
            <a href='/#certifications'>Certifications</a>
          </li>
          <li>
            <a href='/#experience'>Experience</a>
          </li>
          <li>
            <a href='/#contact'>Contact</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};
