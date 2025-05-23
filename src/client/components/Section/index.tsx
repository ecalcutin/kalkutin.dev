import clsx from 'clsx';
import React, { Fragment, PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly centered?: boolean;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  const { subtitle } = props;

  return (
    <section id={props.id} className={styles.container}>
      <h2
        className={clsx(styles.overline, {
          [styles.centered!]: props.centered,
        })}
      >
        {subtitle}
      </h2>

      <h2
        className={clsx(styles.title, {
          [styles.centered!]: props.centered,
        })}
      >
        {props.title}
      </h2>
      <Fragment>{props.children}</Fragment>
    </section>
  );
};
