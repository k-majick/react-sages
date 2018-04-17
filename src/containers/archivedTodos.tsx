import { connect } from 'react-redux';
import { Todos } from '../todos/Todos';
import { IState } from '../store';
import { Dispatch } from 'redux';
import { createTodo, deleteTodo } from '../reducers/todo'

const mapStatetoProps = (state: IState) => ({
  title: 'Todos',
  todos: state.todos.current,
  editor: true
})

const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  addTodo(title: string) {
    dispatch(createTodo(title))
  },
  removeTodo(id: number) {
    dispatch(deleteTodo(id))
  }
})

export const ArchivedTodos = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Todos)
