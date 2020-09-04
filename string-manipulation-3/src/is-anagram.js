/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      str1 += firstString[i];
      if (!secondString.includes(firstString[i])) {
        return false;
      }
    }
  }
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      str2 += secondString[i];
      if (!firstString.includes(secondString[i])) {
        return false;
      }
    }
  }
  if (str1.length !== str2.length) {
    return false;
  }
  return true;
}

// declare two variables with empty string
// create for loop
// concatenate index value onto first variable and reassign the variable
// check if string at i is not a space
// if true, check if first string at i is not included in second string
// if true, return false
// exit loop
// create loop
// concatenate index value onto second variable and reassign the variable
// check if string at i is not a space
// if true, check if second at i is not included in first string
// if true, return false
// exit loop
// check if variable 1 and 2 don't have same length
// if true, return false
// return true
