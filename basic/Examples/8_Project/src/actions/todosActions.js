export function addTodosAction(task) {
  return { type: "ADD_TODO", task };
}

export function toggleTodosAction(id) {
  return { type: "TOGGLE_TODO", id };
}

export function filterAction(filter) {
  let type;
  switch (filter) {
    case "All":
      type = "SHOW_ALL";
      break;
    case "Active":
      type = "SHOW_ACTIVE";
      break;
    case "Completed":
      type = "SHOW_COMPLETED";
      break;
    default:
      break;
  }
  return { type };
}
