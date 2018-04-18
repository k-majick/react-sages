import * as React from 'react';
import { UsersListContainer } from '../containers/UsersList';
import { UserFormContainer } from '../containers/UserForm';
//import { IUser } from '../users/user';
import { match } from 'react-router-dom';

interface Props {
  match: match<{ id: string }>
}

export class UsersPage extends React.Component<Props> {

  state = {}

  static getDerivedStateFromProps(props: Props) {
    console.log(props.match);
    return {}
  }

  render() {
    return <div className="row">
      <div className="col">
        <UsersListContainer />
      </div>
      <div className="col">
        <UserFormContainer />
      </div>
    </div>
  }

}
