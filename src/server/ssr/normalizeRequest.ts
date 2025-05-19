import { type Request as ExpressRequest } from 'express';

export default (expressRequest: ExpressRequest): Request => {
  const url = new URL(
    expressRequest.originalUrl,
    `${expressRequest.protocol}://${expressRequest.host}`,
  );

  const request: Request = new Request(url.toString(), {
    method: expressRequest.method,
  });

  return request;
};
