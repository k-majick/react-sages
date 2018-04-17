import { Reducer, ActionCreator } from 'redux';

export type counterState = number;
export const initialCounter = 0;

interface INC {
  type: 'INC',
  payload: number
}
interface DEC {
  type: 'DEC',
  payload: number
}
type CounterActions = INC | DEC

export const inc: ActionCreator<INC> = (payload: number) => ({
  type: 'INC', payload
})

export const dec: ActionCreator<DEC> = (payload: number) => ({
  type: 'DEC', payload
})

export const counter: Reducer<number> = (state = 0, action: CounterActions) => {
  switch (action.type) {
    case 'INC': return state + action.payload
    case 'DEC': return state - action.payload
    default: return state
  }
}
