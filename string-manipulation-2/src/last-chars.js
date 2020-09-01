/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  if (string !== '' && length < string.length) {
    let phrase = '';
    for (let i = string.length - length; i < string.length; i++) {
      phrase += string[i];
    }
    return phrase;
  } else {
    return string;
  }
}

// create a conditional checking if the string is not empty and if the length param is less than the string length X
// if true, declare a variable initialized with an empty string X
// create a for loop initialized with a variable with the value of the string length - the length param X
// within the loop, concatenate the current index of the string to the variable and reassign the result of that expression to the varibale X
// return the variable X
// if false, return the string param X
