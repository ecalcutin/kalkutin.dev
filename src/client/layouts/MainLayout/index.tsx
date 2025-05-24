import React, { PropsWithChildren } from 'react';

import { Header } from 'client/components/Header';

import styles from './layout.module.css';

type Props = PropsWithChildren;

export const MainLayout: React.FC<Props> = props => {
  return (
    <div>
      <Header />
      <main className={styles.layout}>{props.children}</main>
    </div>
  );
};
