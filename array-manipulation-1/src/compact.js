/* eslint-disable no-unused-vars */
function compact(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// define a function that omits all falsy values from array and pushes the truthy values into a new array X
// define a variable initialized with an empty array X
// create a for loop to loop through the length of the argument array X
// within the loop, create a conditional that checks if the value of the current index of the array is truthy X
// if true, push the value of the index into the new array X
// return the new array X
