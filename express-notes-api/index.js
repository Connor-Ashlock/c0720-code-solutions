/* eslint-disable no-console */
const express = require('express');
const data = require('./data');
const fs = require('fs');
const app = express();
const jsonMiddleware = express.json();
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

app.post('/api/notes', jsonMiddleware, (req, res) => {
  if (req.body.content) {
    req.body.id = data.nextId;
    notesArr.push(req.body);
    notes[data.nextId++] = req.body;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
        process.exit(1);
      } else {
        res.status(201).json(req.body);
      }
    });
  } else {
    res.status(400).json({ error: 'content is a required field' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  let isIdFound = false;
  if (!Number(req.params.id) || req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    for (let i = 0; i < notesArr.length; i++) {
      if (Number(req.params.id) === notesArr[i].id) {
        notesArr.splice(i, 1);
        delete notes[req.params.id];
        const newData = JSON.stringify(data, null, 2);
        isIdFound = true;
        fs.writeFile('data.json', newData, err => {
          if (err) {
            res.status(500).json({ error: 'An unexpected error occurred.' });
            console.error(err);
            process.exit(1);
          } else {
            res.sendStatus(204);
          }
        });
      }
    }
    if (!isIdFound) {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  }
});

app.put('/api/notes/:id', jsonMiddleware, (req, res) => {
  let isIdFound = false;
  if (!Number(req.params.id) || req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.body.content) {
    for (let i = 0; i < notesArr.length; i++) {
      if (Number(req.params.id) === notesArr[i].id) {
        notesArr[i].content = req.body.content;
        notes[req.params.id].content = req.body.content;
        const newData = JSON.stringify(data, null, 2);
        isIdFound = true;
        fs.writeFile('data.json', newData, err => {
          if (err) {
            res.status(500).json({ error: 'An unexpected error occurred.' });
            console.error(err);
            process.exit(1);
          } else {
            res.status(201).json(notesArr[i]);
          }
        });
      }
    }
    if (!isIdFound) {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else {
    res.status(400).json({ error: 'content is a required field' });
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
