import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers/counterReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const spmDiv = document.getElementById("app");
//composeWithDevTools for dev purpose to inspect state
const appStore = createStore(counterReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  spmDiv
);
