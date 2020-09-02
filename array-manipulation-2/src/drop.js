/* eslint-disable no-unused-vars */
function drop(array, count) {
  if (array.length === 0) {
    return array;
  }
  const newArr = [];
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

// check if there is an empty array X
// if true, return the array X
// declare a variable initialized with an empty array literal X
// create a for loop X
// loop throught the whole array minus the number held within count at the beginning of the array X
// push the current value of the index at array into the new array X
// return the new array X
