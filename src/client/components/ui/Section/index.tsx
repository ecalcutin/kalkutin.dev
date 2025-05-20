import React, { Fragment, PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly id: string;
  readonly title: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  return (
    <section id={props.id} className={styles.container}>
      <h2>{props.title}</h2>
      <Fragment>{props.children}</Fragment>
    </section>
  );
};
