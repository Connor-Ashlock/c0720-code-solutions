/* eslint-disable no-unused-vars */
function reverse(array) {
  const newArr = [];
  for (let i = array.length - 1; i > -1; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

// define a new variable initialized with an empty array X
// create a for loop that loops through the array in reverse by setting the variable in the initialization step the value of the array length minus 1 X
// set the condition to be the variable greater than -1 X
// decrement the variable in the final expression X
// in the statement, push the value stored within the index of the array into the new array X
// return the array X
