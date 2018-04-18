import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counter, counterState } from './reducers/counter';
import { TodosState, todos } from './reducers/todo';
import { UsersState, users } from './reducers/user';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export interface IState {
  counter: counterState,
  todos: TodosState,
  users: UsersState
}

/*
const initialState = {
  counter: initialCounter,
  todos: initialTodos
}
*/

const reducer = combineReducers<IState>({
  /* nested: combineReducers({
    counter,
  }), */
  counter: counter,
  todos: todos,
  users
})

//export const store = createStore(reducer, initialState);

export const store = createStore<IState>(
  reducer,
  applyMiddleware(
    thunk,
    promise({}),
  )
)

window['store'] = store;
