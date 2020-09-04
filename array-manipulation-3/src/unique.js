/* eslint-disable no-unused-vars */
function unique(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (!arr.includes(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
}

// declare a variable with an empty array lit
// create a for loop
// create a conditional to check if the array does not include the current index
// if true, push the current index into the empty array
// exit loop and return array
