/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  let str = '';
  let backwardStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      str += string[i];
      backwardStr = string[i] + backwardStr;
    }
  }
  return str === backwardStr;
}

// declare two variables holding an empty string
// create a loop
// check if the index at i is not a space
// if true, concatenate the index with the value stored in the first variable
// also concatenate the index at i onto the end of the second variable
// at the end of the loop, check if the first variable matches the second and return the value
