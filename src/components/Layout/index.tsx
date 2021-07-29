import React, { Fragment } from "react";
import styled from "styled-components";

import Social from "components/Social";
import Email from "components/Email";
import Nav from "components/Nav";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = (props) => {
  return (
    <Fragment>
      <StyledContent>
        <Nav />
        <Social />
        <Email />
        <div id="content">
          {props.children}
          {/* <Footer /> */}
        </div>
      </StyledContent>
    </Fragment>
  );
};

export default Layout;
