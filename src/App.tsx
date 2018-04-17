import * as React from 'react';
import { ITodo } from './todos/todo';
import { TodosPage } from './screens/TodosPage';
import { Users } from './users/Users';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';

interface State {
  todos: ITodo[];
  archived: ITodo[];
  tab: string;
}

class App extends React.Component<{}, State> {

  state: State = {
    todos: [],
    archived: [],
    tab: 'users'
  }

  setTab = (tab: string) => {
    this.setState({ tab })
    console.log(tab)
  }

  public render() {
    return (
      <main>
        <div className="container">
          <div>
            <ul className="nav nav-tabs">
              <li><a className={"nav nav-link " + (this.state.tab == this.state.tab ? 'active' : '')} onClick={
                () => this.setTab('todos')
              }>Todos</a></li>
              <li><a className="nav-link" onClick={
                () => this.setTab('archived')
              }>Users</a></li>
            </ul>
          </div>
          {this.state.tab == 'todos' ?
            <TodosPage />
            :
            <Users />
          }
        </div >
      </main >
    );
  }
}

export default App;
