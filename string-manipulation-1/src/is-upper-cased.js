/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

// create a for loop that loops through all indexs of the string X
// within the loop check if index at i is not uppercased X
// if a string is not uppercased, return false X
// if all are true, return true X
