/* eslint-disable no-unused-vars */
function getValues(object) {
  const arr = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}

// declare a variable initialized with an empty array literal X
// create a for in loop X
// push the key value of the object into the new array X
// return the array X
