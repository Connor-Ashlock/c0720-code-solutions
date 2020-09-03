/* eslint-disable no-unused-vars */
function invert(source) {
  const newObj = {};
  for (const prop in source) {
    newObj[source[prop]] = prop;
  }
  return newObj;
}

// declare a variable with an empty obj literal
// create a for in loop
// invert the key and the value of the source and assign add it to the new obj
// exit for loop
// return new obj
