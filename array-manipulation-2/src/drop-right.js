/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  const newArr = [];
  for (let i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

// declare a variable initialized with an empty array literal X
// loop through the length of the array minus the value of count X
// within the loop, push the value stored in the current index of the array into the new array X
// return the new array X
