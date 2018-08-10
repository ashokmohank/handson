import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import App from "./components/App";
import userDetailsReducer from "./reducers/userDetailsReducer";

const appStore = createStore(
  userDetailsReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

/*
Store: {
  isFetching:false,
  userDetails:{},
  error:""
}

Actions:
  {type: "FETCH_USER_DETAILS",url:"https://api.github.com/users/gaearon"}

  {type:"IS_FETCHING"}

  {type:"FETCH_SUCCESS",userDetails:{}}

  {type:"FETCH_ERROR",error:"some error"}
*/
