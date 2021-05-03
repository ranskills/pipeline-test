import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/v1', (req, res) => res.send('Express + TypeScript Server'));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
