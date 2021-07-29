import React, { useState, Fragment } from "react";
import styled from "styled-components";

import Social from "components/Social";
import Email from "components/Email";

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

        <Email />
        {/* <Nav isHome={isHome} />
        
         */}
        <div id="content">
          {props.children}
          {/* <Footer /> */}
        </div>
      </StyledContent>
    </Fragment>
  );
};

export default Layout;
