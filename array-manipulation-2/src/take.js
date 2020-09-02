/* eslint-disable no-unused-vars */
function take(array, count) {
  if (array.length === 0) {
    return array;
  }
  const newArr = [];
  for (let i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

// check if array input is empty
// if true, return array
// declare a variable initialized with an empty array literal X
// create a for loop X
// loop through the input array the amount of times in the count parameter X
// push the array at i into the new array X
// return the new array X
