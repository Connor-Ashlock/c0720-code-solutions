/* eslint-disable no-unused-vars */
function union(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    arr.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      arr.push(second[i]);
    }
  }
  return arr;
}

// declare variable with empty array
// create for loop
// push the first param index at i into the new array
// exit loop and create a new one
// check if second array at i is not included in first array
// if true, push array at i into new array
// return array
