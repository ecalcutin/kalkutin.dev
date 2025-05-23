import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly side: 'left' | 'right';
} & PropsWithChildren;

export const SideRail: React.FC<Props> = props => {
  const { children } = props;

  return (
    <div className={clsx(styles.container, styles[props.side])}>{children}</div>
  );
};
