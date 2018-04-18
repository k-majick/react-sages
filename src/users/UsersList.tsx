import * as React from 'react';
import { IUser } from '../users/user';

interface Props {
  users: IUser[],
  selectedId: IUser['id'] | null,
  select: (user: IUser) => any,
  load: () => any
}

export const UsersList = (props: Props) =>
  <div>
    <button onClick={props.load}>Load users</button>
    <div className="list-group">
      {props.users.map(user =>
        <div className={"list-group-item " + (user.id == props.selectedId ? 'active' : '')}
          key={user.id} onClick={() => props.select(user)}>
          {user.name}
        </div>)}
    </div>
  </div>
