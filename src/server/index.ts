import path from 'node:path';

import express, { type Request, type Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { HTML } from '../client/server-entry';

const app = express();

const STATIC_DIR = path.join(process.cwd(), 'build', 'static');

app.use('/static', express.static(STATIC_DIR));
app.use((request: Request, response: Response) => {
  const html = renderToString(React.createElement(HTML));
  response.status(200).send(html);
});

app.listen(3000);
