function loggingMW(store) {
  return function (next) {
    return function (action) {
      console.log("action: ", action);
      console.log("prevState: ", store.getState());
      next(action);
      console.log("nextState: ", store.getState());
    };
  };
}

export default loggingMW;
