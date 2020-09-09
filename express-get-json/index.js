/* eslint-disable no-console */
const express = require('express');
const app = express();

const students = [
  {
    id: 1,
    name: 'Connor Ashlock',
    course: 'Web Dev',
    grade: 92
  },
  {
    id: 2,
    name: 'Tim Davis',
    course: 'Teaching',
    grade: 92
  }
];

app.get('/api/grades', (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  console.log('server is listening');
});
