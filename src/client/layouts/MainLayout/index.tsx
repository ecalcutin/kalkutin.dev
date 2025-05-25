import React, { Fragment, PropsWithChildren } from 'react';

import { Footer } from 'client/components/Footer';
import { Header } from 'client/components/Header';
import { Rails } from 'client/components/Rails';

import styles from './layout.module.css';

type Props = PropsWithChildren;

export const MainLayout: React.FC<Props> = props => {
  return (
    <Fragment>
      <Header />
      <Rails />
      <main className={styles.layout}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
