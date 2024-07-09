import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/tasks', (req, res) => {
  res.json([]);
});

app.post('/tasks', (req, res) => {
  res.json({});
});

export default app;
