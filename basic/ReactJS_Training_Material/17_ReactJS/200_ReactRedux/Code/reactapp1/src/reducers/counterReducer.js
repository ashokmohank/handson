function counterReducer(state = { counter: 0 }, action) {
  let newState;
  switch (action.type) {
    case "INCREMENT":
      newState = {
        ...state,
        counter: state.counter + parseInt(action.step, 10),
      };

      break;
    case "DECREMENT":
      newState = { ...state, counter: state.counter - action.step };
      break;
    default:
      newState = { ...state };
      break;
  }
  // console.log("StateCOUNTER: ", newState);
  return newState;
}

export default counterReducer;
