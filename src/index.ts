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

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

app.get('/v1/random', async (req, res) => {
  const statuses = [200, 400, 401];
  let selectedStatusIndex = Math.floor(Math.random() * statuses.length);
  const status = statuses[selectedStatusIndex];
  const delayMs = getRandomInt(1000, 10000);

  setTimeout(
    () => res.status(status).json({ message: `Random with status code ${status}` }),
    delayMs
  );
});

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
