/* eslint-disable no-unused-vars */
function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}

// create conditionanl checking if string equals an empty string
// if true retunr an empty array
// otherwise return result of the expression of the split method of the string object with an argument of space string
