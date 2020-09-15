// value stored within createElement is being imported from the lib module

import { createElement } from '../lib';

// the class todoList is being exported and the opening curly brace for the code block
// the constructor being defined with 1 param onToggle and the opening curly brace for the code block
// the value in onToggle is being assigned to the onToggle prop of this obj
// the bind method of the handleChange property of this obj is being called passing in 1 argument of-
// the value stored within the variable this, which is being assigned to the handleChange property of this obj
// there is the closing curly brace for the constructor

export default class TodoList {
  constructor(onToggle) {
    this.onToggle = onToggle;
    this.handleChange = this.handleChange.bind(this);
  }

  // the handleChange method is being defined with 1 param event and the opening curly brace for the code block
  // the closest method of the target prop of this obj is being called passing in the string [data-todo-id]-
  // and the result of that expression is being assigned to the const variable named todoItem
  // the value in todoItem is being checked if it is falsy. if true, return
  // the parseInt function is being called passing in 2 args: the getAttribute method of the todoItem obj is being called passing in a argument, the string data-todo-id-
  // and the argument number 10, and the result of that expression is being assigned to the const variable named todoId
  // the onToggle method of this obj is being called passing in the argument, the value stored within the variable todoId
  // there is the closing curly brace for the code block

  handleChange(event) {
    const todoItem = event.target.closest('[data-todo-id]');
    if (!todoItem) return;
    const todoId = parseInt(todoItem.getAttribute('data-todo-id'), 10);
    this.onToggle(todoId);
  }

  // the renderCheckbox method is being defined with 1 param todo and the opening curly brace for the code block
  // the createElement function is being called passing in 2 args: the string input and the object literal with 3 key value pairs and the result of that expression is being assigned to the const variable checkbox
  // the string checkbox is being assigned to the prop type
  // the string along with the template literal property id of the todo obj is being assigned to the prop id
  // the string form-check-input is being assigned to the prop class
  // the isCompleted prop of the todo obj is being assigned to the checked prop of the checkbox obj
  // checkbox is being returned
  // there is the closing curly brace for the code block

  renderCheckbox(todo) {
    const checkbox = createElement('input', {
      type: 'checkbox',
      id: `task${todo.id}`,
      class: 'form-check-input'
    });
    checkbox.checked = todo.isCompleted;
    return checkbox;
  }

  // the renderTodoItem method is being defined with 1 param todo and the opening curly brace for the code block
  // the isCompleted prop of the todo obj is being assigned to the const variable named labelStyle
  // not sure what's going on in line 58 or 59
  // something is being assigned to the const variable todoItem
  // the createElement function is being called passing in 3 args: the string li, an obj with 2 key value pairs: the string list-group-item which is being assigned to the prop class
  // and the id prop of the todo obj is being assigned to the string data-todo-id
  // and an array
  // the createElement function is being called passing in 3 args: the string div, an obj with the string form-check d-flex which is being assigned to the prop class, and an array
  // the renderCheckbox method of the this obj is being called passing in the arg todo
  // the createElement function is being called passing in 3 args: the string label, an obj with 2 key value pairs: the string form-check-label flex-grow-1 which is being assigned to the prop class-
  // the string along with the template literal property id of the todo obj is being assigned to the prop for
  // and the task prop of the todo obj
  // the value stored within todoItem is being returned
  // there is the closing curly brace for the code block

  renderTodoItem(todo) {
    const labelStyle = todo.isCompleted
      ? 'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
      : 'cursor: pointer; text-decoration: inherit;';
    const todoItem = (
      createElement('li', { class: 'list-group-item', 'data-todo-id': todo.id }, [
        createElement('div', { class: 'form-check d-flex' }, [
          this.renderCheckbox(todo),
          createElement('label', { style: labelStyle, class: 'form-check-label flex-grow-1', for: `task${todo.id}` }, todo.task)
        ])
      ])
    );
    return todoItem;
  }

  // the render method is being defined with 1 param todos and the opening curly brace for the code block
  // something is being assigned to the const variable todoList
  // the createElement function is being called passing in 3 args: the string ul, an obj with the string list-group shadow-sm mb-4 which is being assigned to the prop class
  // and the map method of the todos obj is being called passing in a argument of an anon arrow function with a param of todo
  // the renderTodoItem method of this obj is being called passing in an arg of todo and the result of that expression is being returned
  // the addEventListener method of the todoList obj is being called passing in 2 args: the string change and the handleChange prop of this obj
  // todoList is being returned
  // there is the closing curly brace for the code block
  // there is the closing curly brace for the class

  render(todos) {
    const todoList = (
      createElement('ul', { class: 'list-group shadow-sm mb-4' }, todos.map(todo => {
        return this.renderTodoItem(todo);
      }))
    );
    todoList.addEventListener('change', this.handleChange);
    return todoList;
  }
}
