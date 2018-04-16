import * as React from 'react';
import { TodoList } from './TodoList';
import { ITodo } from './todo';
import { ChangeEvent } from 'react';

interface State {
  mainTitle: string,
  newTitle: string
}

interface Props {
  title?: string;
  todos: ITodo[],
  editor?: boolean,
  addTodo: (title: string) => void,
  removeTodo: (id: ITodo['id']) => void
}

export class Todos extends React.Component<Props, State> {

  state: State = {
    mainTitle: 'Lista',
    newTitle: ''
  }

  static defaultProps = {
    title: 'Todos'
  }

  changeTitle(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      newTitle: event.target.value
    });
  }

  addTodo() {
    this.props.addTodo(this.state.newTitle)
    this.setState({
      newTitle: ''
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.mainTitle}</h2>

        {this.props.todos.length ?
          <TodoList todos={this.props.todos} removeTodo={this.props.removeTodo} />
          :
        <p>Nothing</p>}

        {this.props.editor ?

          <div className="input-group mt-2">
            <input className="form-control"
              value={this.state.newTitle}
              type="text"
              onKeyUp={e => e.key == "Enter" && this.addTodo()}
              onChange={e => this.changeTitle(e)} />
            <button className="btn btn-primary" onClick={e => this.addTodo()}>Add</button>
          </div>

          : null}

      </div>
    )
  }
}
