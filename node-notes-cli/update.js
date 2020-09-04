const fs = require('fs');
const data = require('./data');
const notes = data.notes;

const update = (id, string) => {
  notes[id] = string;
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, err => {
    if (err) throw err;
  });
};

module.exports = update;
