/* eslint-disable no-console */
const express = require('express');
const data = require('./data');
const fs = require('fs');
const app = express();
const jsonMiddleware = express.json();

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const prop in data.notes) {
    notesArr.push(data.notes[prop]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  if (!Number(req.params.id) || req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    if (data.notes[req.params.id]) {
      res.json(data.notes[req.params.id]);
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  }
});

app.post('/api/notes', jsonMiddleware, (req, res) => {
  if (req.body.content) {
    const dataCopy = {
      nextId: data.nextId,
      notes: Object.assign({}, data.notes)
    };
    req.body.id = dataCopy.nextId;
    dataCopy.notes[dataCopy.nextId++] = req.body;
    const newData = JSON.stringify(dataCopy, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        data.notes[data.nextId++] = req.body;
        res.status(201).json(req.body);
      }
    });
  } else {
    res.status(400).json({ error: 'content is a required field' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (!Number(req.params.id) || req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    if (data.notes[req.params.id]) {
      const dataCopy = {
        nextId: data.nextId,
        notes: Object.assign({}, data.notes)
      };
      delete dataCopy.notes[req.params.id];
      const newData = JSON.stringify(dataCopy, null, 2);
      fs.writeFile('data.json', newData, err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
          console.error(err);
        } else {
          delete data.notes[req.params.id];
          res.sendStatus(204);
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  }
});

app.put('/api/notes/:id', jsonMiddleware, (req, res) => {
  if (!Number(req.params.id) || req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.body.content) {
    if (data.notes[req.params.id]) {
      const dataCopy = {
        nextId: data.nextId,
        notes: Object.assign({}, data.notes)
      };
      dataCopy.notes[req.params.id] = {
        id: req.params.id,
        content: req.body.content
      };
      const newData = JSON.stringify(dataCopy, null, 2);
      fs.writeFile('data.json', newData, err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
          console.error(err);
        } else {
          data.notes[req.params.id].content = req.body.content;
          res.status(201).json(data.notes[req.params.id]);
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else {
    res.status(400).json({ error: 'content is a required field' });
  }
});

app.listen(3000, () => {
  console.log('server is listening');
});
