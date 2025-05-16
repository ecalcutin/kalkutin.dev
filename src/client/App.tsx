import React from 'react';

import 'client/styles/index.css';

import { DefaultLayout } from './layout/default';

export const App: React.FC = () => {
  return <DefaultLayout></DefaultLayout>;
};

// Export for server-side rendering
export default React.createElement(App);
