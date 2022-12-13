import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'theme';
import HomePage from 'pages/HomePage';
import Layout from 'components/Layout';

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
