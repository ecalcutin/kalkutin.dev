import React, { Fragment } from 'react';

import 'client/styles/global.css';
import { MainLayout } from './layouts/MainLayout';
import { About } from './sections/About';
import { Hero } from './sections/Hero';

export const App: React.FC = () => {
  return (
    <Fragment>
      <MainLayout>
        <Hero />
        <About />
      </MainLayout>
    </Fragment>
  );
};

export default React.createElement(App);
