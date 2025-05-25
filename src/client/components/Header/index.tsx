import React from 'react';

import { Button } from '../Button';

import { Logo } from './Logo';
import styles from './header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.logo} href='/' aria-label='home'>
          <Logo />
        </a>
        <ol className={styles.links}>
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
          <li className={styles.resume}>
            <a href={'/'}>
              <Button>Resume</Button>
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};
