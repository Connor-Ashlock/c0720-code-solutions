/* eslint-disable no-unused-vars */
function equal(first, second) {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) return false;
  }
  return true;
}

// create a for loop checking if the first param index does not equal the second param index
// if true, return false
// exit loop and return true
