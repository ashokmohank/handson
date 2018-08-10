import { combineReducers } from "redux";

import counterReducer from "./counterReducer";

const cr = combineReducers({
  counter: counterReducer,
});

export default cr;
