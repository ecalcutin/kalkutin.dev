import React, { PropsWithChildren } from 'react';

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
      <div className={styles.content}>{children}</div>
    </div>
  );
};
