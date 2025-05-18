import React from 'react';

import styles from './styles.module.css';

export const Navigation: React.FC = () => {
  return (
    <div className={styles.container}>
      <ol className={styles.wrapper}>
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
    </div>
  );
};
