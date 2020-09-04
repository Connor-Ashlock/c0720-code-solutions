/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      arr.push(first[i]);
    }
  }
  return arr;
}

// declare a new variable with an empty array
// create for loop
// check if first array at i is included in second array
// if true, push the first index into new array
// return array
