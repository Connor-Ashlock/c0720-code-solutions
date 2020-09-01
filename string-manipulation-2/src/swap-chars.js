/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// declare a variable initialized with an empty string X
// create a for loop X
// within the loop, check if the loop is on the firstIndex X
// if true, concatenate the value of secondIndex onto the variable and reassign the result of the expression to the variable X
// then check if the loop is on the secondIndex X
// if true, concatenate the value of firstIndex onto the variable and reassign the result of the expression to the variable X
// else, concatenate the value of the current index onto the variable and reassign the result of the expression to the variable X
// return the variable X
