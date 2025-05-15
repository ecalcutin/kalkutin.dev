import express, { Request, Response } from 'express';

const app = express();

app.get('/', async (_: Request, response: Response) => {
  response.status(200);
});

app.listen(3000);
