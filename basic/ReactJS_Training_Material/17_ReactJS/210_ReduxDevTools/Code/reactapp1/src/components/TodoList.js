import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  function clickHandler(id) {
    props.onTodoListClick(id);
  }

  const todoListElementArray = props
    .todos
    .map(todo => (<Todo
      key={todo.id}
      text={todo.text}
      completed={todo.completed}
      onClick={() => clickHandler(todo.id)} 
    />));

  return (
    <ul>{todoListElementArray}</ul >
  );
}

export default TodoList;
