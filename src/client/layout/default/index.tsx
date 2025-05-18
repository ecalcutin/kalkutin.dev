import React, { PropsWithChildren } from 'react';

import { Header } from 'client/components/Header';

import styles from './styles.module.css';

type Props = {} & PropsWithChildren;

export const DefaultLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
