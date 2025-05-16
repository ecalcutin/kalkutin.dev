import React, { Fragment } from 'react';

import { App } from './App';

export const HTML: React.FC = () => {
  return (
    <Fragment>
      <html>
        <head>
          <title>SSR App</title>
          <link rel='stylesheet' href='/static/client.css' />
        </head>
        <body>
          <div id='root'>
            <App />
          </div>
          <script type='module' src='/static/client.js'></script>
        </body>
      </html>
    </Fragment>
  );
};
