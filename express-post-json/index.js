/* eslint-disable no-console */
const express = require('express');
const app = express();
const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  console.log('server is listening');
});

const jsonMiddleware = express.json();

app.use(jsonMiddleware, (req, res) => {
  req.body.id = nextId++;
  grades.push(req.body);
  res.status(201);
  res.json(req.body);
});
