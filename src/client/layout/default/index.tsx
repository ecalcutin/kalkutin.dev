import React from 'react';
import { Outlet } from 'react-router';

import { Header } from 'client/components/widgets/Header';
import { SideRailEmail } from 'client/components/widgets/SideRailEmail';
import { SideRailSocial } from 'client/components/widgets/SideRailSocials';

import styles from './styles.module.css';

export const DefaultLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <SideRailSocial />
      <SideRailEmail />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
