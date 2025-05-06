import React, { Fragment, useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'theme';
import HomePage from 'pages/HomePage';
import Layout from 'components/Layout';

import packageJson from '../package.json';

const App = () => {
  useLayoutEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Version: ${packageJson.version}`);
  }, []);
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
