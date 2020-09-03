/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

process.argv.add = add(process.argv[2], process.argv[4]);
process.argv.subtract = subtract(process.argv[2], process.argv[4]);
process.argv.multiply = multiply(process.argv[2], process.argv[4]);
process.argv.divide = divide(process.argv[2], process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
    console.log(process.argv.add);
    break;
  case 'minus':
    console.log(process.argv.subtract);
    break;
  case 'times':
    console.log(process.argv.multiply);
    break;
  case 'over':
    console.log(process.argv.divide);
    break;
}
