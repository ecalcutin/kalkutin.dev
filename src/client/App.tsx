import React, { Fragment } from 'react';

import 'client/styles/global.css';
import { MainLayout } from './layouts/MainLayout';

export const App: React.FC = () => {
  return (
    <Fragment>
      <MainLayout />
    </Fragment>
  );
};

export default React.createElement(App);
