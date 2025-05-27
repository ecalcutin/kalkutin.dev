import React, { Fragment, useLayoutEffect } from 'react';

import 'client/styles/global.css';
import { version } from '../../package.json';

import { MainLayout } from './layouts/MainLayout';
import { About } from './sections/About';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';

export const App: React.FC = () => {
  useLayoutEffect(() => {
    // eslint-disable-next-line
    console.log(`App version: ${version}`);
  }, []);

  return (
    <Fragment>
      <MainLayout>
        <Hero />
        <About />
        <Certifications />
        <Experience />
        <Contact />
      </MainLayout>
    </Fragment>
  );
};
