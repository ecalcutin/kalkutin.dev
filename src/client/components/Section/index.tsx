import clsx from 'clsx';
import React, { Fragment, PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly id: string;
  readonly title: string;
  readonly overline?: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  const { overline } = props;

  return (
    <section id={props.id} className={styles.container}>
      {overline && (
        <h2 className={clsx(styles.overline, styles.numbered)}>{overline}</h2>
      )}
      <h2
        className={clsx(styles.title, {
          [styles.numbered!]: !overline,
          [styles.centered!]: overline,
          [styles.heading!]: overline,
        })}
      >
        {props.title}
      </h2>
      <Fragment>{props.children}</Fragment>
    </section>
  );
};
