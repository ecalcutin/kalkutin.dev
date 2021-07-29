import React, { Fragment } from "react";
import styled from "styled-components";

import Hero from "components/sections/Hero";
import About from "components/sections/About";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const HomePage = () => {
  return (
    <Fragment>
      <StyledMainContainer>
        <Hero />
        <About />
      </StyledMainContainer>
    </Fragment>
  );
};

export default HomePage;
