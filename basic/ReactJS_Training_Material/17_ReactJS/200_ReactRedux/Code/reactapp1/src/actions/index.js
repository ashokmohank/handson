export function incrementCounter(step) {
  return {
    type: "INCREMENT",
    step,
  };
}

export function decrementCounter(step) {
  return { type: "DECREMENT", step };
}

export function changeStep(val) {
  return {
    type: "CHANGE_STEP",
    payload: val,
  };
}
