/* eslint-disable no-console */
const express = require('express');
const app = express();
const students = [
  {
    name: 'Connor Ashlock',
    grade: 92,
    id: 1,
    course: 'Math'
  },
  {
    name: 'Tim D',
    grade: 92,
    id: 2,
    course: 'Teaching'
  }
];

app.get('/api/grades', (req, res) => {
  res.json(students);
});

app.delete('/api/grades/:id', (req, res) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === Number(req.params.id)) {
      students.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('server is listening');
});
