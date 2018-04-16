import * as React from 'react';
import { TodoList } from './todos/TodoList';
import { ITodo } from './todos/todo';
import { ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface State {
  todos: ITodo[],
  newTitle: string,
  counter?: number
}

class App extends React.Component<{}, State> {

  state: State = {
    todos: [
      {
        id: 123,
        title: 'Test Todo',
        completed: false
      }
    ] as ITodo[],
    newTitle: ''
  }

  addTodo() {
    const todo: ITodo = {
      id: Date.now(),
      title: this.state.newTitle,
      completed: false
    }
    console.log(todo);

    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
      newTitle: ''
    }))
  }

  changeTitle(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.state.newTitle = value;

    this.setState({
      newTitle: value
    });

    this.setState(prevState => {
      return {
        newTitle: value,
        counter: prevState.newTitle.length
      }
    });

    console.log(this);
  }

  public render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1></h1>
              <TodoList todos={this.state.todos} />
              <input className="form-control"
                value={this.state.newTitle}
                type="text"
                onKeyUp={e => e.key == "Enter" && this.addTodo()}
                onChange={e => this.changeTitle(e)} />
              <button className="btn btn-default" onClick={e => this.addTodo()}>Add</button>
              {this.state.newTitle}
            </div>
          </div >
        </div >
      </main >
    );
  }
}

export default App;
