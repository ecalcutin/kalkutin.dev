import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';

type Props = {
  readonly id: string;
  readonly active?: boolean;
  readonly onClick: () => void;
} & PropsWithChildren;

export const TabButton: React.FC<Props> = props => {
  const { id, active, onClick } = props;

  return (
    <button
      id={id}
      onClick={onClick}
      className={clsx(styles.container, { [styles.active!]: active })}
    >
      {props.children}
    </button>
  );
};
