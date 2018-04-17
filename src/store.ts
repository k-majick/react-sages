import { createStore, combineReducers } from 'redux';
import { counter, counterState, initialCounter } from './reducers/counter';
import { TodosState, todos, initialTodos } from './reducers/todo';

export interface IState {
  counter: counterState,
  todos: TodosState
}

const initialState = {
  counter: initialCounter,
  todos: initialTodos
}

const reducer = combineReducers<IState>({
  counter: counter,
  todos: todos
})

export const store = createStore(reducer, initialState);

window['store'] = store;
