import React from 'react';

import 'client/styles/index.css';

import { DefaultLayout } from './layout/default';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
};

// Export for server-side rendering
export default React.createElement(App);
