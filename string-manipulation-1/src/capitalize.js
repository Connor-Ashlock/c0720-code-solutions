/* eslint-disable no-unused-vars */
function capitalize(word) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[0]) {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord;
}

// define a variable initialized with an empty string X
// create a for loop X
// create a condtional within the for loop to check if the string at i is the first index X
// If true, capitalize the letter X, concatenate it with the variable and reassign the concatenated result to the variable X
// else lowercase the current index concatenate it with the variable and reassign the concatenated result to the variable X
// return the variable X
