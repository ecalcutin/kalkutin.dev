import React, { PropsWithChildren } from 'react';

import { Footer } from 'client/components/Footer';
import { Header } from 'client/components/Header';
import { SideRailEmail } from 'client/components/SideRailEmail';
import { SideRailSocial } from 'client/components/SideRailSocials';

import styles from './styles.module.css';

type Props = PropsWithChildren;

export const DefaultLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      <SideRailSocial />
      <SideRailEmail />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
