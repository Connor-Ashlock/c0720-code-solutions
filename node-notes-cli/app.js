const read = require('./read');
const add = require('./add');
const del = require('./delete');
const update = require('./update');

switch (process.argv[2]) {
  case 'read':
    read();
    break;
  case 'add':
    add(process.argv[3]);
    break;
  case 'delete':
    del(process.argv[3]);
    break;
  case 'update':
    update(process.argv[3], process.argv[4]);
    break;
}
