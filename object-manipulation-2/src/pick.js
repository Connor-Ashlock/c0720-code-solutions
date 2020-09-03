/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const newObj = {};
  for (const prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}

// define a variable with an empty object literal
// create a for in loop
// inside the loop, check if the current property is included in the keys array and check if the property is not undefined
// if true, assign the value of the property to the new obj and use the source property as the new property
// When the for loop ends, return the new obj
