// value stored within createElement is being imported from the lib module

import { createElement } from '../lib';

// the class todoForm is being exported and the opening curly brace for the code block
// the constructor being defined with 1 param onSubmit and the opening curly brace for the code block
// an empty string is being assigned to the newTask prop of this obj
// null is being assigned to the element prop of this obj
// the value in onSubmit is being assigned to the onSubmit prop of this obj
// the bind method of the handleChange property of this obj is being called passing in 1 argument of-
// the value stored within the variable this, which is being assigned to the handleChange property of this obj
// the bind method of the handleSubmit property of this obj is being called passing in 1 argument of-
// the value stored within the variable this, which is being assigned to the handleSubmit property of this obj
// there is the closing curly brace for the constructor

export default class TodoForm {
  constructor(onSubmit) {
    this.newTask = '';
    this.element = null;
    this.onSubmit = onSubmit;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // the handleChange method is being defined with 1 param event and the opening curly brace for the code block
  // the value prop of the target prop of the even obj is being assigned to the newTask prop of this obj
  // there is the closing curly brace for the constructor

  handleChange(event) {
    this.newTask = event.target.value;
  }

  // the handleSubmit method is being defined with 1 param event and the opening curly brace for the code block
  // the preventDefault method of the event obj is being called
  // the onSubmit method of this obj is being called passing in 1 arg of newTask prop of the this obj
  // an empty string is being assigned to the newTask prop of this obj
  // the reset method of the target prop of this obj is being called
  // the querySelector method of the target prop of the event obj is being called with 1 arg the string input-
  // and being chained onto that is the focus method, which is being called
  // there is the closing curly brace for the constructor

  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit(this.newTask);
    this.newTask = '';
    event.target.reset();
    event.target.querySelector('input').focus();
  }

  // the render method is being defined and the opening curly brace for the code block
  // the element prop of this obj is being checked if it is truthy. if true, the element prop of this obj is returned
  // something is being assigned to the element prop of this obj
  // the createElement function is being called passing in 3 args: the string form, an obj with a value of the string shadow-sm mb-4-
  // being assigned to the class prop, and an array
  // the createElement function is being called passing in 3 args: the string div, an obj with a value of the string input-group-
  // which is being assigned to the prop class, and an array
  // the createElement function is being called passing in 2 args: the string input, an obj with a four key value pairs
  // the string text is being assigned to the prop type
  // the boolean true is being assigned to the prop required
  // the the string form-control is being assigned to the prop class
  // the string What to do? is being assigned to the prop placeholder
  // the createElement function is being called passing in 3 args: the string div, an obj with a value of the string input-group-append-
  // which is being assigned to the prop class, and an array
  // the createElement function is being called passing in 3 args: the string button, an obj with two key value pairs. a value of the string submit which is being assigned to-
  // the prop type and a string btn btn-primary being assigned to the prop class, and the string Add Todo
  // the addEventListener method of the element prop of this obj is being called passing in 2 args: the string change, and the handleChange prop of this obj
  // the addEventListener method of the element prop of this obj is being called passing in 2 args: the string submit, and the handleSubmit prop of this obj
  // the element prop of this obj is being returned
  // there is the closing curly brace for the code block
  // there is the closing curly brace for the class

  render() {
    if (this.element) return this.element;
    this.element = (
      createElement('form', { class: 'shadow-sm mb-4' }, [
        createElement('div', { class: 'input-group' }, [
          createElement('input', {
            type: 'text',
            required: true,
            class: 'form-control',
            placeholder: 'What to do?'
          }),
          createElement('div', { class: 'input-group-append' }, [
            createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Add Todo')
          ])
        ])
      ])
    );
    this.element.addEventListener('change', this.handleChange);
    this.element.addEventListener('submit', this.handleSubmit);
    return this.element;
  }
}
