import fs from 'node:fs';
import path from 'node:path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  type StaticRouterProviderProps,
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router';

import { App } from 'client/App';
import { appRoutes } from 'client/routes';

const render = async (request: Request) => {
  const htmlPath = path.resolve(process.cwd(), 'src', 'public', 'index.html');
  const html = fs.readFileSync(htmlPath, { encoding: 'utf-8' });

  const { query, dataRoutes } = createStaticHandler(appRoutes);
  const context = await query(request);

  if (context instanceof Response) {
    return context;
  }

  const router = createStaticRouter(dataRoutes, context);

  const rendered = renderToString(
    React.createElement(App, {
      children: React.createElement<StaticRouterProviderProps>(
        StaticRouterProvider,
        {
          router,
          context,
        },
      ),
    }),
  );

  return html.replace('<!--SSR-->', rendered);
};

export default render;
