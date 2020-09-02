/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  if (array.length === 0) return array;
  const newArr = [];
  for (let i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

// check if array is empty X
// if true return array X
// declare a variable initialized with an empty array literal X
// loop through the array X
// within the loop, push the last elements of the array into the new array based on the count X
// return the new array X
