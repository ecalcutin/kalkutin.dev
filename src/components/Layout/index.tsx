import React, { useState, Fragment } from "react";
import styled from "styled-components";

import Social from "components/Social";

// import { Head, Loader, Nav, Social, Email, Footer } from '@components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = (props) => {
  return (
    <Fragment>
      <StyledContent>
        <Social />
        {/* <Nav isHome={isHome} />
        
        <Email isHome={isHome} /> */}
        <div id="content">
          {props.children}
          {/* <Footer /> */}
        </div>
      </StyledContent>
    </Fragment>
  );
};

export default Layout;
