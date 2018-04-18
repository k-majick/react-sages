import * as React from 'react';
import { connect } from "react-redux";
import { UserForm } from "../users/UserForm";
import { IState } from "../store";
import { Dispatch } from "redux";
import { IUser } from '../users/user';
import { saveUser } from '../reducers/user';

const mapStateToProps = (state: IState) => {
  return {
    user: state.users.selected
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>) => {
  return {
    onSave(user: IUser) {
      dispatch(saveUser(user))
    },
    onCancel() {

    }
  }
}

export const UserFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  props => (props.user ?
    <UserForm {...props} user={props.user} /> : <p>Select user</p>
  )
)
