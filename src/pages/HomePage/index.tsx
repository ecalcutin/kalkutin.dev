import React, { Fragment } from 'react';

import { Hero } from 'components/sections/Hero';
import About from 'components/sections/About';
import Experience from 'components/sections/Experience';
import Contact from 'components/sections/Contact';
import Certifications from 'components/sections/Certifications';

import { StyledMainContainer } from './styles';

export const HomePage: React.FC = () => {
  return (
    <Fragment>
      <StyledMainContainer className='fillHeight'>
        <Hero />
        <About />
        <Certifications />
        <Experience />
        <Contact />
      </StyledMainContainer>
    </Fragment>
  );
};
