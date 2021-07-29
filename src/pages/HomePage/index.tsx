import React, { Fragment } from "react";
import styled from "styled-components";

import About from "components/sections/About";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const HomePage = () => {
  return (
    <Fragment>
      <StyledMainContainer>
        <About />
      </StyledMainContainer>
    </Fragment>
  );
};

export default HomePage;
