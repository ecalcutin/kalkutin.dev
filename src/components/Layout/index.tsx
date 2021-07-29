import React, { Fragment } from "react";

import { StyledContent } from "./styles";

import Social from "components/Social";
import Email from "components/Email";
import Nav from "components/Nav";

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
