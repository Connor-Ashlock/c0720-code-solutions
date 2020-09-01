/* eslint-disable no-unused-vars */
function ransomCase(string) {
  const lowercase = string.toLowerCase();
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
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
// within the for loop, check if i is an odd number X
// if true, capitalize the current value at the index and concatenate the current value at the index onto the second declared variable and reassign the result of that expression to the second declared variable X
// return the second declared variable X
