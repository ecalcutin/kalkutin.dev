import React, { Fragment } from 'react';

import Social from 'components/Social';
import Email from 'components/Email';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

import { StyledContent } from './styles';

const Layout = props => {
  return (
    <Fragment>
      <StyledContent>
        <Nav />
        <Social />
        <Email />
        <div id='content'>
          {props.children}
          <Footer />
        </div>
      </StyledContent>
    </Fragment>
  );
};

export default Layout;
