import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly className?: string;
} & PropsWithChildren;

export const Button: React.FC<Props> = props => {
  return (
    <button className={clsx(styles.container, props.className)}>
      {props.children}
    </button>
  );
};
