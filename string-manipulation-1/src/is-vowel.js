/* eslint-disable no-unused-vars */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (char !== char.toLowerCase()) {
    char = char.toLowerCase();
  }
  return vowels.includes(char);
}

// declare a variable initializing it with an array with vowels X
// create a condtional checking if the character is lowercased X
// if false, lowercase the character X
// return the value of the conditional that checks if the passed argument is included in the array of vowels X
