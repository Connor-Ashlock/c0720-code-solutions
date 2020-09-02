/* eslint-disable no-unused-vars */
function chunk(array, size) {
  if (array.length === 0) return array;
  const containerArray = [];
  let counter = 0;
  let incrimentSize = size;
  for (let i = 0; i < array.length / size; i++) {
    const chunk = [];
    for (; counter < incrimentSize; counter++) {
      chunk.push(array[counter]);
      if (!containerArray.includes(chunk)) containerArray.push(chunk);
      if (counter === array.length - 1) return containerArray;
    }
    incrimentSize += size;
  }
}

// declare a variable with an empty array literal that will store sub arrays X
// declare a counter variable initialized with the number 0 X
// declare a variable to hold the value of size X
// loop through the array length divided by the size X
// create a new variable initialized with an empty array literal that will store the content from the array param X
// create a nested for loop and loop through the array param X
// before each iteration, check if the counter variable is less than the variable that stores the size param X
// incriment the counter in the final expression X
// push the current index at counter of the param array into the new array X
// create a conditional checking if the new array is not included in container array X
// if true, push the new array into the container array X
// create a conditional checking if counter equals the array length minus 1 X
// if true, return the container of the chunk arrays X
// when the nested loop finishes, incriment the variable containing the size value by the value stored in size X
