// the value in the TodoApp is being imported from the todo-app module

import TodoApp from './components/todo-app';

// the querySelector method of the document obj is being called passing in the arg string #app and the result of that expression is being assigned to the const variable container

const container = document.querySelector('#app');

// the number 4 is being assigned to the const variable named nextId

const nextId = 4;

// the array with 3 objs that have properties of id, task, and isCompleted is being assigned to the const variable named todos

const todos = [
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

// there is a new TodoApp being instantiated with 4 args: container, nextId, todos, and the anon arrow function with a param of newState, which is being assigned to the const variable named app
// the log method of the console obj is being called passing in the arg of newState
// there is a closing curly brace for the anon arrow function and the closing parentheses for the arg list

const app = new TodoApp(container, nextId, todos, newState => {
  /* eslint-disable no-console */
  console.log(newState);
});

// the start method of the app obj is being called

app.start();
