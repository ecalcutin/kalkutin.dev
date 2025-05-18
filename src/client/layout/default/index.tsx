import React, { PropsWithChildren } from 'react';

import { Header } from 'client/components/widgets/Header';
import { SideRailSocial } from 'client/components/widgets/SideRailSocials';

import styles from './styles.module.css';

type Props = {} & PropsWithChildren;

export const DefaultLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      <SideRailSocial />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
