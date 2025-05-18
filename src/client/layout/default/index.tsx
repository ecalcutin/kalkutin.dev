import React, { PropsWithChildren } from 'react';

import { Header } from 'client/components/widgets/Header';
import { SocialSideRail } from 'client/components/widgets/SocialSideRail';

import styles from './styles.module.css';

type Props = {} & PropsWithChildren;

export const DefaultLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      <SocialSideRail />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
