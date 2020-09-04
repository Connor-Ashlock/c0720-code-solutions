/* eslint-disable no-console */
const fs = require('fs');

const read = fs.readFile('data.json', 'utf-8', (err, data) => {
  if (err) throw err;
  data = JSON.parse(data);
  const notes = data.notes;
  for (const prop in notes) {
    console.log(`${prop}: ${notes[prop]}`);
  }
});

module.exports = read;
