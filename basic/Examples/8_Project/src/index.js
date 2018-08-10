import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";
import combineReducers from "./reducers/combineReducers";

const appStore = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(logger)),
);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

/*
STORE:
{
  todos: [
    {id:1,text:"Learn React",completed:true},
    {id:2,text:"Learn Redux",completed:false}
    {id:3,text:"Learn React-Router",completed:false}
  ]
  filter:"SHOW_ALL | SHOW_ACTIVE | SHOW_COMPLETED"
}

ACTIONS:
  {type:"ADD_TODO",task:"Learn Webpack"}
  {type:"TOGGLE_TODO",id:1}

  {type:"SHOW_ALL"}
  {type:"SHOW_ACTIVE"}
  {type:"SHOW_COMPLETED"}
*/
