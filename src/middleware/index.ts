import { NextFunction, Request, Response } from 'express';
import { httpRequestDurationMicroseconds, httpRequestsTotal } from '../metric';
import url from 'url';
export const httpRequestsTotalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const endTimer = httpRequestDurationMicroseconds.startTimer();
  res.on('finish', () => {
    console.log(`XXXX ${req.url}`);
    //   url. .parse(req.url).pathname;
    const status = res.statusCode;
    const method = req.method;
    const path = req.url;

    httpRequestsTotal
      .labels({
        status,
        method,
        path,
      })
      .inc();

    endTimer({ status, method, path });
  });
  next();
};
