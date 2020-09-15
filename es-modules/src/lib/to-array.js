// the function toArray is being exported
// the isArray method of the Array obj is being called passing in the arg value. not sure what the second half is saying, but the result of the expression is being returned

export default function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
