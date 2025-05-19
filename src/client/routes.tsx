import { type RouteObject } from 'react-router';

import { DefaultLayout } from './layout/default';
import { HomePage } from './pages/HomePage';

const NOT_FOUND = () => <div>404</div>;

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '*',
        Component: NOT_FOUND,
      },
    ],
  },
];
