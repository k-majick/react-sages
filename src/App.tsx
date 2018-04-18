import * as React from 'react';
import { ITodo } from './todos/todo';
import { TodosPage } from './screens/TodosPage';
import { UsersPage } from './screens/UsersPage';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import { Route, Switch, Redirect } from 'react-router-dom';

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
    return <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <div className="container">
          <a className="navbar-brand" href="#/">React App</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#/todos">Todos</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#/users">Users</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/" render={(props: any) => <p>Hello</p>} exact={true} />
              <Route path="/todos" component={TodosPage} />
              <Route path="/users" component={UsersPage} />
              <Route path="/users/:id" component={UsersPage} />
              <Route path="*" component={UsersPage} exact={true} />
              <Redirect to="/todos" path="*" />
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}

export default App;

//https://bitbucket.org/ev45ive/react-kwiecien
