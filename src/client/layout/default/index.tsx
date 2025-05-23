import React, { PropsWithChildren } from 'react';

import { Footer } from 'client/components/ui/Footer';
import { Header } from 'client/components/ui/Header';
import { SideRailEmail } from 'client/components/ui/SideRailEmail';
import { SideRailSocial } from 'client/components/ui/SideRailSocials';

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
