import React from 'react';

import styles from './styles.module.css';

export const Navigation: React.FC = () => {
  return (
    <div>
      <ol className={styles.container}>
        <li>About</li>
        <li>Certifications</li>
        <li>Experience</li>
        <li>Contact</li>
      </ol>
    </div>
  );
};
