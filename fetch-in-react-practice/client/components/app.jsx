import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        this.state.todos.push(data);
        this.setState({ todos: this.state.todos });
      })
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todoId) {
        const status = { isCompleted: !this.state.todos[i].isCompleted };
        fetch(`/api/todos/${todoId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(status)
        })
          .then(res => res.json())
          .then(data => {
            this.state.todos.splice(i, 1, data);
            this.setState({ todos: this.state.todos });
          })
          .catch(err => console.error(err));
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
