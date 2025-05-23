import express, { Request, Response } from 'express';

import render from './render';

const app = express();

app.use(express.static('./build', { index: false }));

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

app.listen(3000, () => {
  process.stdout.write(`Server is listening on port ${3000}`);
});
