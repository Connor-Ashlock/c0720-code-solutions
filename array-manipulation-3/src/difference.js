/* eslint-disable no-unused-vars */
function difference(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i]) {
      if (!second.includes(first[i])) {
        arr.push(first[i]);
      }
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (second[i]) {
      if (!first.includes(second[i])) {
        arr.push(second[i]);
      }
    }
  }
  return arr;
}

// declare a variable with an empty array
// create for loop
// check if current index is truthy
// if true, check if the current index of the first param is not included in the second array
// if true, push the current index into the new array
// exit loop
// create for loop and do the exact same thing, but for the second param
// return the array
