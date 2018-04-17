import * as React from 'react';
import { IUser } from "./user";

interface IProps {
  user: IUser
}

interface IState {
  user: IUser
}

export class UserForm extends React.Component<IProps, IState> {

  state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      user: props.user
    }
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.user !== this.props.user) {
      const update = confirm("R U sure?");
      if (update) {
        this.setState({
          user: nextProps.user
        })
      }
    }
  }

  updateField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const el = event.target,
      fieldName = el.name,
      fieldValue = el.value;

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [fieldName]: fieldValue
      }
    }))
  }

  render() {
    return <div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" value={this.state.user.name} onChange={this.updateField} name="name" />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input type="text" className="form-control" value={this.state.user.email} onChange={this.updateField} name="email" />
      </div>
      <div className="form-group">
        <input type="button" value="Save" className="btn btn-primary" />
        <input type="button" value="Cancel" className="btn btn-warning" />
      </div>
    </div>
  }

}
