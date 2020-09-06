/* eslint-disable no-unused-vars */
function titleCase(title) {
  let result = '';
  const minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const lowercase = title.toLowerCase();
  const splitStr = lowercase.split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    let newStr = '';
    const originalStr = splitStr[i];
    if (splitStr[i].includes('javascript')) {
      splitStr[i] = 'JavaScript';
    } else if (splitStr[i] === 'api') {
      splitStr[i] = 'API';
    } else if (splitStr[i].length > 3 || !minor.includes(splitStr[i]) || splitStr[i - 1].includes(':')) {
      for (let j = 0; j < splitStr[i].length; j++) {
        if (j === 0) {
          newStr += splitStr[i][j].toUpperCase();
        } else if (splitStr[i][j - 1] === '-') {
          newStr += splitStr[i][j].toUpperCase();
        } else {
          newStr += splitStr[i][j];
        }
      }
      splitStr[i] = newStr;
    }
    if (originalStr.includes(':')) {
      splitStr[i] += ':';
    }
    if (i !== splitStr.length - 1) {
      splitStr[i] += ' ';
    }
  }
  for (let i = 0; i < splitStr.length; i++) {
    result += splitStr[i];
  }
  return result;
}

// Capitalize the first word,
// Capitalize all “major” words including the second part of hyphenated major words
// Capitalize all words of four letters or more.

// create variable with an empty string for the result
// create array of minor words
// store a lowercases version of the string in a variable
// split the string by spaces
// create a for loop
// check if any index is strictly equal to javascript
// if true, the index now is assigned the string "JavaScript"
// also check if index is strictly equal to api. if true the index is now assigned "API"
// check if a string is greater than 3 letters, or if the string isn't included in the array of minor words, or if the previous string includes a :. if true capitalize the first letter
// create another loop
// check if the previous index has a -. if true captitalize current index and reassign it the new value
// concatenate the indexs back together with a space. if its the last index, omit the space
