/* eslint-disable no-unused-vars */
function reverseWords(string) {
  let result = '';
  let middle = '';
  let reverseStr = string.split('');
  reverseStr = reverseStr.reverse();
  for (let i = 0; i < reverseStr.length; i++) {
    middle += reverseStr[i];
  }
  middle = middle.split(' ');
  middle = middle.reverse();
  for (let i = 0; i < middle.length; i++) {
    if (i === middle.length - 1) {
      result += middle[i];
    } else {
      result += `${middle[i]} `;
    }
  }
  return result;
}

// declare variable and give it a value of the split string by empty string
// reverse the split string
// create for loop
// in loop concatenate string array back together
// split string by spaces
// reverse the array
// create a loop and concatenate the strings back together with an insetered space
// if the current index is the last array index, dont give it a space
// return array
