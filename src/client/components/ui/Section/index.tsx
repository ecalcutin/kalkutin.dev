import clsx from 'clsx';
import React, { Fragment, PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly id: string;
  readonly title: string;
  readonly className?: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  return (
    <section id={props.id} className={clsx(styles.container, props.className)}>
      <h2>{props.title}</h2>
      <Fragment>{props.children}</Fragment>
    </section>
  );
};
