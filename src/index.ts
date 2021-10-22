import express from 'express';
import path from 'path';
import { register } from './metric';
import { httpRequestsTotalMiddleware } from './middleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v[1-9]+', httpRequestsTotalMiddleware);
app.get('/v1', (req, res) => res.send('Express + TypeScript Server'));
app.get('/v1/slow', (req, res) => {
  setTimeout(() => res.json({ title: 'Slow response' }), 1000);
});
app.get('/metrics', async (req, res) => {
  console.log(register.contentType);
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
