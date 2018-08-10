import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers/userInfoReducer';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

/*
Sample State object:

{
      data: <User Info JSON>,
      error: <Error Details>,
}
*/
