/* eslint-disable no-console */
const express = require('express');
const data = require('./data');
const app = express();
const notes = data.notes;
const notesArr = [];

app.get('/api/notes', (req, res) => {
  for (const prop in notes) {
    notesArr.push(notes[prop]);
  }
  res.json(notesArr);
});

app.listen(3000, () => {
  console.log('server is listening');
});
