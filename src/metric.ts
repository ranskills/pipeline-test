import client from 'prom-client';

export const register = new client.Registry();
const PREFIX = 'pipeline_test';
register.setDefaultLabels({
  app: 'pipeline_test',
});

export const httpRequestsTotal = new client.Counter<string>({
  name: `${PREFIX}_http_requests_total`,
  help: 'Total HTTP requests',
  labelNames: ['method', 'path', 'status'],
});

export const httpRequestDurationMicroseconds = new client.Histogram({
  name: `${PREFIX}_http_request_duration_seconds`,
  help: 'Duration of HTTP requests in microseconds',
  labelNames: ['method', 'path', 'status'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
});

register.registerMetric(httpRequestsTotal);
register.registerMetric(httpRequestDurationMicroseconds);
