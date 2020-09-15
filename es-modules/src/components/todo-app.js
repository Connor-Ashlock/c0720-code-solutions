// the values stored within createElement and noop are being imported from the lib module
// the value stored within TodoList is being imported from the module todo-list
// the value stored within TodoForm is being imported from the module todo-form

import { createElement, noop } from '../lib';
import TodoList from './todo-list';
import TodoForm from './todo-form';

// the class TodoApp is being exported with the open curly brace for the class code block
// the constructor is being declared with 4 params: conatainer, nextId, todos,-
// and the value stored within noop is being assigned to the param onUpdate. Also the opening curly-
// brace for the constructor code block
// the value stored within container is being assigned to the container property of this obj
// the value stored within todos is being assigned to the todos property of this obj
// the value stored within nextId is being assigned to the nextId property of this obj
// null is being assigned to the todoForm property of this obj
// null is being assigned to the todoList property of this obj
// the boolean false is being assigned to the isStarted property of the this obj
// the value stored within onUpdate is being assigned to the onUpdate property of this obj
// the bind method of the addTodo property of this obj is being called passing in 1 argument of-
// the value stored within the variable this, which is being assigned to the addTodo property of this obj
// the bind method of the toggleCompleted property of this obj is being called passing in 1 argument-
// of the value stored within the variable this, which is being assigned to the toggleCompleted property of this obj
// there is the closing curly brace for the constructor

export default class TodoApp {
  constructor(container, nextId, todos, onUpdate = noop) {
    this.container = container;
    this.todos = todos;
    this.nextId = nextId;
    this.todoForm = null;
    this.todoList = null;
    this.isStarted = false;
    this.onUpdate = onUpdate;
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  // the start method is being defined and the opeing curly brace for the code block
  // the isStarted prop of the this obj is being check if it is truthy, and returns if true.
  // a new TodoForm obj is being instantiated passing in an argument of the addTodo prop of the this obj and the-
  // result of that expression is being assigned to the todoForm of this obj
  // a new TodoList obj is being instantiated passing in an argument of the toggleCompleted prop of the this obj and the-
  // result of that expression is being assigned to the todoList of this obj
  // the update method of this obj is being called
  // the boolean true is being assigned to the isStarted prop of this obj
  // there is a closing curly brace for the code block

  start() {
    if (this.isStarted) return;
    this.todoForm = new TodoForm(this.addTodo);
    this.todoList = new TodoList(this.toggleCompleted);
    this.update();
    this.isStarted = true;
  }

  // the addTodo method is being defined with 1 param task and the open curly brace for the code block
  // the nextId prop of this obj is being assigned to the const variable named id
  // the boolean false is being assigned to the const variable named isCompleted
  // there is an object literal with a prop of id, task, and isCompleted being assigned to the const variable named newTodo
  // the concat method of the todos prop of this obj is being called passing in the argument of the value stored within the variable newTodo-
  // and the result of that expression is being assigned to the prop todos of this obj
  // the nextId prop of this obj is being incrimented
  // the update method of this obj is being called
  // there is a closing curly brace for the code block

  addTodo(task) {
    const id = this.nextId;
    const isCompleted = false;
    const newTodo = { id, task, isCompleted };
    this.todos = this.todos.concat(newTodo);
    this.nextId++;
    this.update();
  }

  // the toggleCompleted method is being defined with 1 param todoId and the open curly brace for the code block
  // the map method of the todos prop of this obj is being called passing in an anon arrow function that has 1 param todo. Also the opening curly brace for the anon function code block
  // the prop id of the todo obj is checking if it does not strictly equal the value stored in the variable todoId. if true, the value stored in todo is returned
  // the assign method of the obj obj is being called passing in 3 args: an empty obj literal, the value stored in the variable todo, and the obj literal with-
  // isCompleted prop of the not todo obj being assigned to the isCompleted property
  // there is a closing curly brace for the anon arrow function code block and the closing parentheses for the map method arg list
  // the update method of this obj is being called
  // there is a closing curly brace for the code block

  toggleCompleted(todoId) {
    this.todos = this.todos.map(todo => {
      if (todo.id !== todoId) return todo;
      return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    });
    this.update();
  }

  // the update method is being defined and the opening curly brace for the code block
  // an empty string is being assigned to the innerHTML prop of the container prop of this obj
  // the append method of the container prop of this obj is being called passing in 3 args
  // the createElement function is being called passing in 3 args: the string h1, the obj literal with a string of mb-4 being assigned to the prop class,-
  // and the string JS Todo
  // the render method of the todoForm prop of this obj is being called
  // there is a closing parentheses for the append arg list
  // the value stored within the this variable is being assigned to the const variable nextId and todos
  // the onUpdate method of this obj is being called passing in 1 arg, the obj lit with a prop of nextId, and the prop todos
  // there is a closing curly brace for the update method
  // there is a closing curly brace for the class

  update() {
    this.container.innerHTML = '';
    this.container.append(
      createElement('h1', { class: 'mb-4' }, 'JS Todo'),
      this.todoForm.render(),
      this.todoList.render(this.todos)
    );
    const { nextId, todos } = this;
    this.onUpdate({ nextId, todos });
  }
}
