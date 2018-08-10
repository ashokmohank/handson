import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import App from "./components/App";
import combineReducers from "./reducers/combineReducers";

import loggingMW from "./middlewares/loggingMW";

const spaStore = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(logger, loggingMW)),
);

ReactDOM.render(
  <Provider store={spaStore}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

/*
Store: {count:0}

Actions:
  {type:"INCREMENT"
  {type:"DECREMENT"}

*/
