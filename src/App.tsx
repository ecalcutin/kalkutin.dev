import React, { Fragment } from "react";

import HomePage from "pages/HomePage";
import Layout from "components/Layout";
import Social from "components/Social";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Social />
        <HomePage />
      </Layout>
    </Fragment>
  );
};

export default App;
