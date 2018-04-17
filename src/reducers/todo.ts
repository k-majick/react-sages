
import { Reducer, ActionCreator } from 'redux';
import { ITodo } from '../todos/todo';

export interface TodosState {
  current: ITodo[],
  archived: ITodo[]
}

const initialTodos: TodosState = {
  current: [],
  archived: []
}

export const todos: Reducer<TodosState> = (state = initialTodos, action: TodosActions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        current: [ ...state.current, action.payload]
      }
    default:
      return state
  }
}

type TodosActions = ADD_TODO;

interface ADD_TODO {
  type: 'ADD_TODO',
  payload: ITodo
}

export const addTodo: ActionCreator<ADD_TODO> = (todo: ITodo) => ({
  type: 'ADD_TODO',
  payload: todo
})
