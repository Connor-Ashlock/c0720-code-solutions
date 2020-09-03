/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const newObj = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}

// declare a variable initialized with an empty obj literal
// create a for in loop
// in the loop, check if the prop is not included in the keys array
// if true, assign the the value of the prop to the new obj and set the new obj prop with the same name as the source prop
// return the new obj when the loop has ended
