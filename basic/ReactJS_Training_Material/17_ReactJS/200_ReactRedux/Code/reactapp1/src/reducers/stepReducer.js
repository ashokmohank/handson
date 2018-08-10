function stepReducer(state = { step: 1 }, action) {
  let newState;
  switch (action.type) {
    case "CHANGE_STEP":
      newState = { ...state, step: action.payload };
      break;
    default:
      newState = { ...state };
      break;
  }
  // console.log("StateSTEP: ", newState);
  return newState;
}

export default stepReducer;
