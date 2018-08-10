let nextTodoId = 0;

export function addTodo(text) {
  const actionObj = {
    type: 'ADD_TODO',
    id: nextTodoId += 1,
    text,
  };

  return actionObj;
}

export function toggleTodo(id) {
  const actionObj = {
    type: 'TOGGLE_TODO',
    id,
  };

  return actionObj;
}

export function setVisibilityFilter(filter) {
  const actionObj = {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };

  return actionObj;
}
