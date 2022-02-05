import { NextFunction, Request, Response } from 'express';
import { httpRequestDurationMicroseconds, httpRequestsTotal } from '../metric';

export const httpRequestsTotalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const endTimer = httpRequestDurationMicroseconds.startTimer();
  res.on('finish', () => {
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
