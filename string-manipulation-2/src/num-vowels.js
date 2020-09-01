/* eslint-disable no-unused-vars */
function numVowels(string) {
  const lowercase = string.toLowerCase();
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(lowercase[i])) {
      counter++;
    }
  }
  return counter;
}

// declare a variable initialized with the toLowerCase method being called of the parameter object X
// declare a counter variable initialized with the number 0 X
// declare an array holding only vowels X
// loop through the lowercase variable X
// check if the current index includes a vowel X
// if true, incriment the counter variable X
// return the counter variable X
