import { Reducer, ActionCreator } from 'redux';
import { IUser } from '../users/user';
import { Dispatch } from 'react-redux';
import axios from 'axios';

export interface UsersState {
  users: IUser[],
  selected: IUser | null,
  loading: boolean
}

const initialState = {
  users: [],
  selected: null,
  loading: false
}

export const users: Reducer<UsersState> = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'START_LOAD_USERS': return {
      ...state,
      loading: true
    }
    case 'LOAD_USERS': return {
      ...state,
      users: action.payload,
      loading: false
    }
    case 'SELECT_USER': return {
      ...state,
      selected: action.payload
    }
    case 'SAVE_USER_PENDING': return {
      ...state,
      loading: true
    }
    case 'SAVE_USER_FULFILLED': return {
      ...state,
      loading: false,
      selected: action.payload,
      users: state.users.map(
        user => {
          return user.id == action.payload.id ?
          action.payload: user
        }
      )
    }
    default:
      return state;
  }
};

type ActionTypes = LOAD_USERS | SELECT_USER | START_LOAD_USERS | SAVE_USER

interface SAVE_USER {
  type: 'SAVE_USER_PENDING'
  | 'SAVE_USER_FULFILLED'
  | 'SAVE_USER_REJECTED',
  payload: IUser
}

interface LOAD_USERS {
  type: 'LOAD_USERS',
  payload: IUser[]
}

interface SELECT_USER {
  type: 'SELECT_USER',
  payload: IUser
}

interface START_LOAD_USERS {
  type: 'START_LOAD_USERS'
}

export const saveUser = (user: IUser) => (dispatch: any) => {
  const promise = axios.put<IUser>
    ('http://localhost:9000/users/' + user.id, user)
    .then(res => {
      dispatch(loadUsers())
      return res.data
    })

  return {
    type: 'SAVE_USER', payload: promise
  }
}

export const selectUser: ActionCreator<SELECT_USER> = (user: IUser) => ({
  type: 'SELECT_USER',
  payload: user
})

export const loadUsers = () => (dispatch: Dispatch<any>) => {
  axios.get<IUser[]>('http://localhost:9000/users/')
    .then(res => {
      dispatch({
        type: 'LOAD_USERS', payload: res.data
      })
    }, err =>
        dispatch({ type: 'LOAD_USERS_ERROR', payload: err })
    )
  return {
    type: 'START_LOAD_USERS'
  }
}
