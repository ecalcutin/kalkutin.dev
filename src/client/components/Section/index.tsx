import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './section.module.css';

type Props = {
  readonly id?: string;
  readonly className?: string;
  readonly overline?: string;
  readonly title?: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  const { title, overline, id, className, children } = props;

  return (
    <section id={id} className={clsx(styles.section, className)}>
      {overline && (
        <h2 className={clsx(styles.overline, styles.centered, styles.numbered)}>
          {overline}
        </h2>
      )}
      {title && (
        <h2
          className={clsx(styles.title, {
            [styles.rail!]: !overline,
            [styles.numbered!]: !overline,
            [styles.bigger!]: overline,
            [styles.centered!]: overline,
          })}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
