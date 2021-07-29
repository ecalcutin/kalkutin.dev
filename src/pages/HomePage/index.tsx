import React, { Fragment } from "react";
import styled from "styled-components";

import Hero from "components/sections/Hero";
import About from "components/sections/About";
import Experience from "components/sections/Experience";
import Contact from "components/sections/Contact";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const HomePage = () => {
  return (
    <Fragment>
      <StyledMainContainer>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </StyledMainContainer>
    </Fragment>
  );
};

export default HomePage;
