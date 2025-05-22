import React from 'react';

import { SideRail } from 'client/components/ui/SideRail';
import { SOCIAL_LINKS } from 'client/constants';

import styles from './styles.module.css';

export const SideRailSocial: React.FC = () => {
  return (
    <SideRail side='left'>
      <ul className={styles.container}>
        {SOCIAL_LINKS.map(({ title, icon, url }, index) => {
          return (
            <li key={index}>
              <a title={title} href={url} target='_blank' rel='noopener'>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </SideRail>
  );
};
