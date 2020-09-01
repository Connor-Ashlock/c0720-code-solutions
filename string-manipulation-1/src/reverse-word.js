/* eslint-disable no-unused-vars */
function reverseWord(word) {
  let newWord = '';
  for (let i = word.length - 1; i > -1; i--) {
    newWord += word[i];
  }
  return newWord;
}

// define a variable initialized with an empty string X
// create a for loop initialized with a variable holding the length of word parameter minus 1 X
// the for loop condition checks if i is greater than -1 before each iteration X
// the loops final expression decrements i X
// within the loop, the word param at i is being concatenated and reassigned to the variable X
// return the variable X
