import React from 'react';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.content}>
        <div>Logo</div>
        <div>
          <ol>
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
