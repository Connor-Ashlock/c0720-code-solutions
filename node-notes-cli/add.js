/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data');
const notes = data.notes;

const add = string => {
  notes[data.nextId++] = string;
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, err => {
    if (err) throw err;
  });
};

module.exports = add;
