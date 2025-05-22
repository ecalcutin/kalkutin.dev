import React from 'react';

import { SideRail } from 'client/components/ui/SideRail';

import styles from './styles.module.css';

export const SideRailEmail: React.FC = () => {
  return (
    <SideRail side='right'>
      <ul className={styles.container}>
        <li>
          <a href={`mailto:evgheni.calcutin@gmail.com`}>
            evgheni.calcutin@gmail.com
          </a>
        </li>
      </ul>
    </SideRail>
  );
};
