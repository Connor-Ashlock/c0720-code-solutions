/* eslint-disable no-unused-vars */
function tail(array) {
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

// define a variable for a new array X
// create a for loop X
// loop through all indexs of the argument array except for the first index and push all the looped through indexs into the new array X
// return the new array  X
