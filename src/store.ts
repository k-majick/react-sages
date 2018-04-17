import { createStore, combineReducers } from 'redux';
import { counter, counterState, initialCounter } from './reducers/counter';


interface IState {
  counter: counterState
}

const initialState = {
  counter: initialCounter
}

const reducer = combineReducers<IState>({
  counter: counter
})

export const store = createStore(reducer, initialState)
window['store'] = store
