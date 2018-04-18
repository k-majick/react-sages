import { connect } from 'react-redux';
import { selectUser, loadUsers } from '../reducers/user';
import { Dispatch } from 'redux';
import { UsersList } from '../users/UsersList';
import { IUser } from "../users/user";
import { IState } from "../store";

const mapStatetoProps = (state: IState) => {
  return {
    users: state.users.users,
    loading: state.users.loading,
    selectedId: state.users.selected && state.users.selected.id
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>) => {
  return {
    select: (user: IUser) => {
      dispatch(selectUser(user))
    },
    load() {
      dispatch(loadUsers())
    }
  }
}

export const UsersListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(UsersList)
