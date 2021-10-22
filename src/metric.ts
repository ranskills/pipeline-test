// import { Counter } from 'prom-client';
import client from 'prom-client';

export const register = new client.Registry();
register.setDefaultLabels({
  app: 'pipeline-test',
});

export const httpRequestsTotal = new client.Counter<string>({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'path', 'status'],
});

export const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in microseconds',
  labelNames: ['method', 'path', 'status'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
});

register.registerMetric(httpRequestsTotal);
register.registerMetric(httpRequestDurationMicroseconds);
