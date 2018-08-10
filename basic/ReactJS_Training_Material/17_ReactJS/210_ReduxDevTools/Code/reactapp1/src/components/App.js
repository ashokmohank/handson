import React from 'react';
import Header from './Header';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

/*
SPA Component Hierarchy
  App
    --Header
    ----FilterLink***
    ------Link
    --AddTodo***+++
    --VisibleTodoList***
    ----TodoList
    ------Todo
*/

export default App;
