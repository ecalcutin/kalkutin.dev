import React, { Fragment } from 'react';

import 'client/styles/global.css';
import { MainLayout } from './layouts/MainLayout';
import { About } from './sections/About';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';

export const App: React.FC = () => {
  return (
    <Fragment>
      <MainLayout>
        <Hero />
        <About />
        <Certifications />
        <Contact />
      </MainLayout>
    </Fragment>
  );
};

export default React.createElement(App);
