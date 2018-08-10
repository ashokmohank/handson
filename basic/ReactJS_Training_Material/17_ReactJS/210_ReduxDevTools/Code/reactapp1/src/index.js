import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import reducer from './reducers/combineReducers';

/*
To make redux-devtools-extension work:
1. install redux-devtools-extension from NPM.
2. import composeWithDevTools from redux-devtools-extension library.
3. Pass composeWithDevTools() method as second parameter of createStore().

*/

const store = createStore(reducer, composeWithDevTools());
// const store = createStore(reducer);

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
