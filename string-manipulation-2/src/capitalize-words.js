/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  const lowercase = string.toLowerCase();
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || lowercase[i - 1] === ' ') {
      newWord += lowercase[i].toUpperCase();
    } else {
      newWord += lowercase[i];
    }
  }
  return newWord;
}

// declare a variable initialized with the toLowerCase method being called of the parameter object X
// declare a second variable initialized with an empty string X
// create a for loop X
// within the for loop, check if the current index of the first variable equals the first index X or if the value of the previous index was a space X
// if true, capitalize the value of current index and concatenate the value to the second declared variable and reassign the result of that expression to the second declared variable X
// if false, concatenate the value to the second declared variable and reassign the result of that expression to the second declared variable X
// return the second declared variable X
