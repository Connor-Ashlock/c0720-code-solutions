const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile(process.argv[3], data, 'utf-8', err2 => {
    if (err2) throw err;
  });
});
