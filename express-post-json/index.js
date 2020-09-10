/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const app = express();
const expressStatic = express.static(publicPath);
const grades = [];
const jsonMiddleware = express.json();
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(expressStatic);

app.listen(3000, () => {
  console.log('server is listening');
});

app.post('/api/grades', jsonMiddleware, (req, res) => {
  req.body.id = nextId++;
  grades.push(req.body);
  res.status(201);
  res.json(req.body);
});
