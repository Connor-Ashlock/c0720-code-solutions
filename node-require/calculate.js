/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

switch (process.argv[3]) {
  case 'plus':
    console.log(add(process.argv[2], process.argv[4]));
    break;
  case 'minus':
    console.log(subtract(process.argv[2], process.argv[4]));
    break;
  case 'times':
    console.log(multiply(process.argv[2], process.argv[4]));
    break;
  case 'over':
    console.log(divide(process.argv[2], process.argv[4]));
    break;
}
