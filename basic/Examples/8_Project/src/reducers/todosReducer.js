let i = 0;

function todosReducer(prevState = [], action) {
  let newState;

  switch (action.type) {
    case "ADD_TODO":
      newState = [
        ...prevState,
        { id: ++i, text: action.task, completed: false },
      ];
      break;
    case "TOGGLE_TODO":
      newState = prevState.map(element => {
        if (element.id === action.id) element.completed = !element.completed;

        return element;
      });

      break;
    default:
      newState = [...prevState];
      break;
  }

  return newState;
}

export default todosReducer;

/*
ACTIONS:
  {type:"ADD_TODO",task:"Learn Webpack"}
  {type:"TOGGLE_TODO",id:1}
*/
