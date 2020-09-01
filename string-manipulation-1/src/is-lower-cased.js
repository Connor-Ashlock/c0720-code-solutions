/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// create a for loop that loops through all indexs of the string X
// within the loop check if index at i is not lowercased X
// if a string is not lowercased, return false X
// if all are true, return true X
