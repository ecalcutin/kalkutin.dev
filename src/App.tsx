import React, { Fragment } from "react";

import HomePage from "pages/HomePage";
import Layout from "components/Layout";
import Nav from "components/Nav";
import Social from "components/Social";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Nav />
        <Social />
        <HomePage />
      </Layout>
    </Fragment>
  );
};

export default App;
