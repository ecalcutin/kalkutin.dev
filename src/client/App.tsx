import React from 'react';

import { DefaultLayout } from './layout/default';

export const App: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>App</h1>
    </DefaultLayout>
  );
};

// Export for using in .ts extensions
export default React.createElement(App);
