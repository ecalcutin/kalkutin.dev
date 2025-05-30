import clsx from 'clsx';
import React, { Fragment } from 'react';

import { EMAIL } from 'client/constants/email';
import { SOCIAL_LINKS } from 'client/constants/socials';

import styles from './rail.module.css';

export const Rails: React.FC = () => {
  return (
    <Fragment>
      <div className={clsx(styles.rail, styles.left, styles.socials)}>
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
      <div className={clsx(styles.rail, styles.right, styles.email)}>
        <ul>
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
