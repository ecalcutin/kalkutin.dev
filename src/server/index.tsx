import inspector from 'node:inspector';

import express, { Request, Response } from 'express';

import render from './render';

const app = express();

app.use(express.static('./build', { index: false }));

app.get('/debug-open', (req, res) => {
  inspector.open(9090, '0.0.0.0');
  res.status(200).end;
});

app.get('/debug-close', (req, res) => {
  inspector.close();
  res.status(200).end();
});

app.get('/', async (_: Request, response: Response) => {
  try {
    const html = await render();
    response.status(200).send(html);
  } catch (e) {
    response.status(500).end();
  }
});

app.get('*', (_: Request, response: Response) => {
  response.redirect('/');
});

app.listen(8080, () => {
  process.stdout.write(`Server is listening on port ${8080}`);
});
