const todos = (state = [], action) => {
  let newState;

  switch (action.type) {

  case 'ADD_TODO':
    newState = [
        ...state, {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    return newState;

  case 'TOGGLE_TODO':
    newState = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    return newState;

  default:
    return state;

  }
};

export default todos;
