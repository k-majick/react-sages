import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { store } from './store'
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/*
const lista = [1,2,3,4,5].reverse()

const Section = (props: { list: any[], title: string }) => {
  return <div>
    <h1>{props.title || 'Todos'}</h1>
    <ul>
      {props.list.map(x => <li key={x} className="list-item"
        style={{ color: x %2 === 0 ? 'red': 'green'}} > Item {x}
      </li>
    )}
  </ul>
</div>
}

setInterval(() => {
  lista.unshift(lista.length + 1)
  ReactDOM.render(
<Section list={lista} title="Todos" />, document.getElementById('root'))
}, 1000)

window['React'] = React;
window['ReactDom'] = ReactDOM;
*/
