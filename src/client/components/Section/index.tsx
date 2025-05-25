import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './section.module.css';

type Props = {
  readonly className?: string;
  readonly title?: string;
  readonly subTitle?: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  const { title, subTitle } = props;

  return (
    <section className={clsx(styles.section, props.className)}>
      {subTitle && <h2>{subTitle}</h2>}
      {title && (
        <h2 className={clsx(styles.title, styles.rail, styles.numbered)}>
          {title}
        </h2>
      )}
      {props.children}
    </section>
  );
};
