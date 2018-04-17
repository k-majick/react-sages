import * as React from 'react';
import { IUser } from "./user";
import axios from 'axios';
import { UserForm } from "./UserForm";

interface IState {
  users: IUser[],
  selected: IUser | null
}

export class Users extends React.Component<{}, IState> {

  state: IState = {
    users: [{
      id: 123,
      name: 'Test',
      username: 'test',
      email: 'text@test.eu'
    }],
    selected: null
  }

  fetchUsers = () => {
    axios.get<IUser[]>('http://localhost:9000/users')
      .then((response: any) => {
        this.setState({
          users: response.data
        })
      })
  }

  selectUser = (selected: IUser | null) => {
    this.setState({ selected })
  }

  saveUser = (user: IUser) => {
    axios.put<IUser>('http://localhost:9000/users/' + user.id, user)
      .then((response: any) => {
        return this.fetchUsers()
      })
  }

  cancelEdit = () => {
    this.selectUser(null)
  }

  render() {
    const selectedId = this.state.selected && this.state.selected.id || -1
    return <div>
      <div className="list-group">
        <h2>Users</h2>
        <div className="row">
          <div className="col">
            {
              this.state.users.map(user =>
                <div className={"list-group-item " + (selectedId && user.id == selectedId ? 'active' : '')}
                  key={user.id}>
                  <a onClick={() => this.selectUser(user)}>{user.name}</a>
                </div>
              )
            }
          </div>
          <div className="col">
            {this.state.selected ?
              <div>
                <h4>{this.state.selected && this.state.selected.name}</h4>
                <UserForm
                  user={this.state.selected}
                  onSave={this.saveUser}
                  onCancel={this.cancelEdit}
                />
              </div>
              :
              <p>Select user</p>
            }
          </div>
        </div>
      </div>
      <button onClick={this.fetchUsers} className="btn btn-primary">Fetch</button>
    </div >
  }

  componentDidMount() {
    this.fetchUsers()
  }
}
