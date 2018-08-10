import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import stepReducer from "./stepReducer";

export default combineReducers({ counterReducer, stepReducer });
