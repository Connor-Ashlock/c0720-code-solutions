/* eslint-disable no-unused-vars */
function truncate(length, string) {
  if (string !== '' && length < string.length) {
    let phrase = '';
    for (let i = 0; i < length; i++) {
      phrase += string[i];
    }
    return `${phrase}...`;
  } else {
    return `${string}...`;
  }
}

// create a conditional checking if the string is not empty and if the length param is less than the string length X
// if true, declare a variable initialized with an empty string X
// create a for loop with the condition of i less than the length param X
// within the loop, concatenate the current index of the string to the variable and reassign the result of that expression to the varibale X
// return the variable with ... appended to the end of it X
// if false, return the string with ... appended to the end of it X
