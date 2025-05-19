// In production builds, React and ReactDOM should be loaded from CDN
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { App } from './App';
import { appRoutes } from './routes';

const browserRouter = createBrowserRouter(appRoutes, {});

hydrateRoot(
  document.getElementById('root')!,
  <App>
    <RouterProvider router={browserRouter} />
  </App>,
);
