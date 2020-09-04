/* eslint-disable no-console */
const read = require('./read');

switch (process.argv[3]) {
  case 'read':
    console.log(read);
    break;
}
