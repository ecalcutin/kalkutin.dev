import React from 'react';

import styles from './header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div></div>
      <nav>
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
