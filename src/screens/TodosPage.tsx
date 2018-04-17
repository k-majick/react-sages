import * as React from 'react';
import { ITodo } from '../todos/todo';
//import { Todos } from '../todos/Todos';
import { CurrentTodos } from '../containers/todos';

interface IState {
  todos: ITodo[];
  archived: ITodo[];
}

export class TodosPage extends React.Component<{}, IState> {

  state: IState = {
    todos: [],
    archived: []
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
    this.setState(prevState => ({
      archived: prevState.archived.filter(
        todo => todo.id !== id
      )
    }))
  }

  public render() {
    return (
      <div className="row">
        <div className="col">
          <CurrentTodos />
          {/* <Todos
            todos={this.state.todos}
            editor={true}
            addTodo={this.addTodo}
            removeTodo={this.archiveTodo}
          /> */}
        </div>
        <div className="col">
          {/* <Todos
            todos={this.state.archived}
            addTodo={this.addTodo}
            removeTodo={this.removeTodo}
          />*/}
        </div>
      </div >
    )
  }

}
