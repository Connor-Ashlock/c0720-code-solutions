// the toArray variable is being imported from the to-array module

import toArray from './to-array';

// the function createElement is being exported with 3 params: tagName, attributes, and an array being assigned to the param children
// and the opening curly brace for the code block
// the create element method of the document obj is being called passing in an arg tagName and the result of that expression is being assigend to-
// the const variable named parent
// there is a for loop which is looping throuhg the name prop in the attributes obj
// the setAttribute method of the parent obj is being called passing in 2 args: name, and the name prop of the attributes obj
// the function toArray is being called passing in the arg children. the forEach method is being chained onto that and is being called-
// passing in an arg of an anon arrow function with a param of child
// there is conditional checking if the child variable is not an instance of the HTMLElement
// if true, the createTextNode of the document obj is being called passing in the arg child, which is being assigned to the child variable
// the appendChild method of the parent obj is being called passing in the arg child
// the value stored within the variable parent is being returned
// there is the closing curly brace for the code block

export default function createElement(tagName, attributes, children = []) {
  const parent = document.createElement(tagName);
  for (const name in attributes) {
    parent.setAttribute(name, attributes[name]);
  }
  toArray(children).forEach(child => {
    if (!(child instanceof HTMLElement)) {
      child = document.createTextNode(child);
    }
    parent.appendChild(child);
  });
  return parent;
}
