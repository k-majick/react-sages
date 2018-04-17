import { createStore, Reducer, Action, ActionCreator } from 'redux'

interface IState {
  counter: number
}

interface INC {
  type: 'INC',
  payload: number
}

interface DEC {
  type: 'DEC',
  payload: number
}
type CounterActions = INC | DEC

const INC: Action = {
  type: 'INC'
}

const DEC: Action = {
  type: 'DEC'
}

export const inc: ActionCreator<INC> = (payload: number) => ({
  type: 'INC', payload
})

export const dec: ActionCreator<DEC> = (payload: number) => ({
  type: 'DEC', payload
})

const counterReducer: Reducer<number> = (state, action: CounterActions) => {
  switch (action.type) {
    case 'INC': return state + 1
    case 'DEC': return state - 1
    default: return state
  }
}

const reducer: Reducer<IState> = (state, action) => {
  return {
    ...state,
    counter: counterReducer(state.counter, action)
  }
}

export const store = createStore(reducer, {counter: 0 })
window['store'] = store
window['inc'] = INC
window['dec'] = DEC
