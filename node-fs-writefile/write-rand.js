const fs = require('fs');

const randomNum = Math.random();

fs.writeFile('random.txt', randomNum, 'utf-8', err => {
  if (err) throw err;
});
