/* eslint-disable no-unused-vars */
function flatten(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0]) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// declare variable with empty array
// loop through array
// check if array at i at 0 exists
// if true, create another for loop
// loop thorugh array at i at j
// push the value at i at j into the new array
// if false, push i into the array
// exit loop and return new array
