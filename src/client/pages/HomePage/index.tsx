import React, { Fragment, useLayoutEffect } from 'react';

import { version } from '../../../../package.json';

import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';

export const HomePage: React.FC = () => {
  useLayoutEffect(() => {
    // eslint-disable-next-line
    console.log(`Version: ${version}`);
  }, []);

  return (
    <Fragment>
      <Hero />
      <About />
      <Certifications />
      <Experience />
      <Contact />
    </Fragment>
  );
};
