import React from 'react';

import { SOCIAL_LINKS } from 'client/constants/socials';

import styles from './styles.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socials}>
        {SOCIAL_LINKS.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url} title={link.title}>
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>

      <a href='https://github.com/ecalcutin/resume'>
        <div>Designed &amp; Built by Evgenii Kalkutin</div>
      </a>
    </footer>
  );
};
