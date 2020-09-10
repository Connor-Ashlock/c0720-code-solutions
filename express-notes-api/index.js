/* eslint-disable no-console */
const express = require('express');
const data = require('./data');
const app = express();
const notes = data.notes;
const notesArr = [];

app.get('/api/notes', (req, res) => {
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  let isIdFound = false;
  if (!Number(req.params.id) || req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    for (let i = 0; i < notesArr.length; i++) {
      if (Number(req.params.id) === notesArr[i].id) {
        res.json(notesArr[i]);
        isIdFound = true;
      }
    }
    if (!isIdFound) {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  }
});

app.listen(3000, () => {
  console.log('server is listening');
});

function start() {
  for (const prop in notes) {
    notesArr.push(notes[prop]);
  }
}

start();
