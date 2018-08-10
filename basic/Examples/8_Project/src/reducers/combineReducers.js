import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";

const CR = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default CR;
