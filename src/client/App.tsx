import React from 'react';

import 'client/styles/index.css';

import { Block } from './components/ui/Block';
import { DefaultLayout } from './layout/default';

export const App: React.FC = () => {
  return (
    <DefaultLayout>
      {[0, 1, 2, 3, 4].map((_, index) => {
        return <Block key={index} />;
      })}
    </DefaultLayout>
  );
};

// Export for server-side rendering
export default React.createElement(App);
