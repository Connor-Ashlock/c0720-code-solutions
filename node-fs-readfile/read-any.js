/* eslint-disable no-console */
const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, text) => {
  if (err) throw err;
  console.log(text);
});
