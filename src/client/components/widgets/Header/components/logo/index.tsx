import React from 'react';

import styles from './styles.module.css';
import { WebsiteLogo } from './website-logo';

export const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href='/' aria-label='home'>
        <WebsiteLogo size={45} />
      </a>
    </div>
  );
};
