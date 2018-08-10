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

export default App;
