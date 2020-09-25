/* eslint-disable no-console */
const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
  for (let i = 3; i < process.argv.length; i++) {
    fs.readFile(process.argv[i], 'utf-8', (err2, text) => {
      if (err2) throw err2;
      console.log(text);
    });
  }
});
