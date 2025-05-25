import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './section.module.css';

type Props = {
  readonly className?: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  return (
    <section className={clsx(styles.section, props.className)}>
      {props.children}
    </section>
  );
};
