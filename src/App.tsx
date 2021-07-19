import React, { Fragment } from "react";

import HomePage from "pages/HomePage";
import Layout from "components/Layout";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <HomePage />
      </Layout>
    </Fragment>
  );
};

export default App;
