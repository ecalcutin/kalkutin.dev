import React from 'react';

import { Button } from 'client/components/Button';

import styles from './styles.module.css';

export const Navigation: React.FC = () => {
  return (
    <ol className={styles.container}>
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
      <li>
        <Button className={styles.resume}>Resume</Button>
      </li>
    </ol>
  );
};
