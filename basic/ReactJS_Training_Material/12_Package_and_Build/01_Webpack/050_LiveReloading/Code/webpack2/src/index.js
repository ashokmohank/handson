import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import App from './components/App';
import reducer from './reducers/combineReducers';

// only change required to add the logger middleware is to import it and pass it
// into createStore() method.
const store = createStore(reducer, applyMiddleware(createLogger()));

render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));

/*
Sample State object:

{
  todos: [
    {
      id: 1,
      text: 'Consider using Redux',
      completed: true,
    },
    {
      id:2,
      text: 'Keep all state in a single tree',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_ALL',
}
*/
