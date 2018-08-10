import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/combineReducers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
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
