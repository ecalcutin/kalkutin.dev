import path from 'node:path';

import express, { type Request, type Response } from 'express';

import render from './ssr/render';

const app = express();

const STATIC_DIR = path.join(process.cwd(), 'build', 'client');

app.use(express.static(STATIC_DIR));
app.use((request: Request, response: Response) => {
  const html = render();
  response.status(200).send(html);
});

app.listen(3000);
