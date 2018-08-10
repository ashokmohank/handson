/* const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
    return action.filter;
  default:
    return state;
  }
}; */

function visibilityFilter(state = 'SHOW_ALL', action) {
  let newState;

  switch (action.type) {

  case 'SET_VISIBILITY_FILTER':
    newState = action.filter;
    return newState;

  default:
    return state;

  }
}

export default visibilityFilter;
