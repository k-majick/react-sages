import { connect } from 'react-redux';
import { Todos } from '../todos/Todos';
import { IState } from '../store';
import { Dispatch } from 'redux';
import { createTodo } from '../reducers/todo'

const mapStatetoProps = (state: IState) => ({
  title: 'Todos',
  todos: state.todos.current,
  editor: true,
  addTodo(title: string) { },
  removeTodo(id: number) { }
})

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  addTodo(title: string) {
    dispatch(createTodo(title))
  },
  removeTodo(id: number) { }
})


export const CurrentTodos = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Todos)
