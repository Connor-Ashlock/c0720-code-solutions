// the noop variable is being imported from the noop module
// the toArray variable is being imported from the to-array module
// value stored within createElement is being imported from the create-element module

import noop from './noop';
import toArray from './to-array';
import createElement from './create-element';

// the obj with value stored in noop, toArray, and createElement are being exported

export {
  noop,
  toArray,
  createElement
};
