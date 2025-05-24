import clsx from 'clsx';
import React, { Fragment } from 'react';

import { SOCIAL_LINKS } from 'client/constants/socials';

import styles from './rail.module.css';

export const Rails: React.FC = () => {
  return (
    <Fragment>
      <div className={clsx(styles.rail, styles.left)}>
        <ul>
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
      </div>
      <div>
        <ul className={clsx(styles.rail, styles.right)}>
          <li>
            <a href={`mailto:evgheni.calcutin@gmail.com`}>
              evgheni.calcutin@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
