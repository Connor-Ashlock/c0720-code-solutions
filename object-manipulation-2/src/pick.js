/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const newObj = {};
  for (const prop in source) {
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        if (source[prop] !== undefined) {
          newObj[prop] = source[prop];
        }
      }
    }
  }
  return newObj;
}

// declare a variable initialized with a empty object literal X
// loop through the keys array X
// within the loop, check if the keys array at the current index's value matches any property on the source obj
// if true, add the property and it's value to the new obj
// finish the loop
// return the variable storing the obj
