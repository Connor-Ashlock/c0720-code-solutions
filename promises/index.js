/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise = takeAChance('Connor');

const fulfilled = success => console.log(success);
const rejected = error => console.error(error.message);

promise.then(fulfilled, rejected);
