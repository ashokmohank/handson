function filterReducer(prevState = "SHOW_ALL", action) {
  let newState;
  switch (action.type) {
    case "SHOW_ALL":
      newState = action.type;
      break;
    case "SHOW_ACTIVE":
      newState = action.type;
      break;
    case "SHOW_COMPLETED":
      newState = action.type;
      break;
    default:
      newState = prevState;
      break;
  }

  return newState;
}

export default filterReducer;

/*
ACTIONS:
  {type:"SHOW_ALL"}
  {type:"SHOW_ACTIVE"}
  {type:"SHOW_COMPLETED"}
*/
