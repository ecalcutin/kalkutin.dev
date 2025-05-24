import React, { Fragment } from 'react';

import 'client/styles/global.css';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './sections/Hero';

export const App: React.FC = () => {
  return (
    <Fragment>
      <MainLayout>
        <Hero />
      </MainLayout>
    </Fragment>
  );
};

export default React.createElement(App);
