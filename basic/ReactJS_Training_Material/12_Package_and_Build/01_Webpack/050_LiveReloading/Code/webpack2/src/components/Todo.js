import React from 'react';

function Todo(props) {
  const todoElement = (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed
        ? 'line-through'
        : 'none',
      }}
    >
      {props.text}
    </li>
  );

  return todoElement;
}

export default Todo;
