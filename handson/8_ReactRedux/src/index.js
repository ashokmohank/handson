import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers/counterReducer";

const spmDiv = document.getElementById("app");

const appStore = createStore(counterReducer);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  spmDiv
);
