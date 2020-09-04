/* eslint-disable no-console */
const read = require('./read');
const add = require('./add');

switch (process.argv[2]) {
  case 'read':
    console.log(read);
    break;
  case 'add':
    add(process.argv[3]);
    break;
}
