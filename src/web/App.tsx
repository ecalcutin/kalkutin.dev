import React, { Fragment } from 'react';
import { DefaultLayout } from './layout/default';

export const App: React.FC = () => {
  return (
    <Fragment>
      <DefaultLayout>
        <div>
          <h1>App</h1>
        </div>
      </DefaultLayout>
    </Fragment>
  );
};
