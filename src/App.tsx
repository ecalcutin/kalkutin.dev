import Layout from "components/Layout";
import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "theme";

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout></Layout>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
