import * as React from 'react';
import { ITodo } from './todos/todo';
import { Todos } from './todos/Todos';
import { Users } from './users/Users';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';

interface State {
  todos: ITodo[];
  archived: ITodo[];
  tab: string;
}

class App extends React.Component<{}, State> {

  state: State = {
    todos: [],
    archived: [],
    tab: 'users'
  }

  addTodo = (title: string) => {
    const todo: ITodo = {
      id: Date.now(),
      title,
      completed: false
    }
    console.log(todo);

    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }))
  }

  archiveTodo = (id: ITodo['id']) => {
    this.setState((prevState => {
      const todo = prevState.todos.find(
        todo => todo.id == id
      )
      return todo ? {
        todos: prevState.todos.filter(
          todo => todo.id !== id
        ),
        archived: [...prevState.archived, todo]
      } : null
    }))
  }

  removeTodo = (id: ITodo['id']) => {
    console.log('removeTodo', id);
    this.setState(prevState => ({
      archived: prevState.archived.filter(
        todo => todo.id !== id
      )
    }))
  }

  setTab = (tab: string) => {
    this.setState({ tab })
  }

  public render() {
    return (
      <main>
        <div className="container">
          <div>
            <ul className="nav nav-tabs">
              <li><a className="nav nav-link" onClick={
                () => this.setTab('todos')
              }>Todos</a></li>
              <li><a className="nav-link" onClick={
                () => this.setTab('archived')
              }>Users</a></li>
            </ul>
          </div>

          {this.state.tab == 'todos' ?
            <div className="row">
              <div className="col">
                <Todos
                  todos={this.state.todos}
                  editor={true}
                  addTodo={this.addTodo}
                  removeTodo={this.archiveTodo}
                />
              </div>
              <div className="col">
                <Todos
                  todos={this.state.archived}
                  addTodo={this.addTodo}
                  removeTodo={this.removeTodo}
                />
              </div>
            </div >
            :
            <div>
                <Users />
            </div>
          }
        </div >
      </main >
    );
  }
}

export default App;
