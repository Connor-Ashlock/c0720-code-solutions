/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (const prop in source) {
    if (target[prop] === undefined) {
      target[prop] = source[prop];
    }
  }
}

// create for in loop
// check if source prop is not defined in target
// if true, assign the target prop a value of the the property value of the source obj.
