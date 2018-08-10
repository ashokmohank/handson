import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combineReducers from "./reducers/combinedReducers";

import { composeWithDevTools } from "redux-devtools-extension";

const spmDiv = document.getElementById("app");
//composeWithDevTools for dev purpose to inspect state
const appStore = createStore(combineReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  spmDiv
);
