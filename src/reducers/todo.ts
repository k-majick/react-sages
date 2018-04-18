import { Reducer, ActionCreator } from 'redux';
import { ITodo } from '../todos/todo';

export interface TodosState {
  current: ITodo[],
  archived: ITodo[]
}

export const initialTodos: TodosState = {
  current: [],
  archived: []
}

export const todos: Reducer<TodosState> = (state = initialTodos, action: TodosActions) => {
  switch (action.type) {
    case 'ADD_TODO': return {
      ...state,
      current: [...state.current, action.payload]
    }
    case 'ARCHIVE_TODO': {
      let id = action.payload
      let todo = state.current.find(
        todo => todo.id == id
      )
      if (todo) {
        return {
          ...state,
          current: state.current.filter(
            todo => todo.id !== id
          ),
          archived: [...state.archived, todo]
        }
      }
    }
    case 'DELETE_TODO': return {
      ...state,
      archived: state.archived.filter(
        todo => todo.id !== action.payload
      )
    }
    default:
      return state
  }
}

type TodosActions = ADD_TODO | ARCHIVE_TODO | DELETE_TODO;

interface ADD_TODO {
  type: 'ADD_TODO',
  payload: ITodo
}

interface ARCHIVE_TODO {
  type: 'ARCHIVE_TODO',
  payload: ITodo['id']
}

interface DELETE_TODO {
  type: 'DELETE_TODO',
  payload: ITodo['id']
}

export const archiveTodo: ActionCreator<ARCHIVE_TODO> = (id: ITodo['id']) => ({
  type: 'ARCHIVE_TODO',
  payload: id
})

export const deleteTodo: ActionCreator<DELETE_TODO> = (id: ITodo['id']) => ({
  type: 'DELETE_TODO',
  payload: id
})

export const addTodo: ActionCreator<ADD_TODO> = (todo: ITodo) => ({
  type: 'ADD_TODO',
  payload: todo
})

export const createTodo: ActionCreator<ADD_TODO> = (title) => ({
  type: 'ADD_TODO',
  payload: {
    id: Date.now(),
    title,
    completed: false
  }
})
