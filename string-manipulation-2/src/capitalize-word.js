/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  const uppercaseWord = word.toUpperCase();
  if (uppercaseWord === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i].toLowerCase();
      }
    }
    return newWord;
  }
}

// define a variable initialized with the calling of the toUpperCase method on the param object X
// create a conditional that checks if the variable matches an all uppercased javascript string X
// if true return the string "JavaScript" X
// if false, define a variable initialized with an empty string X
// create a for loop X
// create a condtional within the for loop to check if the string at i is the first index X
// If true, capitalize the letter X, concatenate it with the variable and reassign the concatenated result to the variable X
// else lowercase the current index concatenate it with the variable and reassign the concatenated result to the variable X
// return the variable X
