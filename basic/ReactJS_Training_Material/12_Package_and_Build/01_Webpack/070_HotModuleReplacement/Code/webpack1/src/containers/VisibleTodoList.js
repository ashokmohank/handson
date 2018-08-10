import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return todos;
  case 'SHOW_COMPLETED':
    return todos.filter(t => t.completed);
  case 'SHOW_ACTIVE':
    return todos.filter(t => !t.completed);
  default:
    throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = {
  onTodoListClick: toggleTodo,
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

/*
mapStateToProps(): This function tells how to transform the current Redux
store state into the props you want to pass to a presentational component
you are wrapping.

mapDispatchToProps(): This function receives the dispatch() method and
returns callback props that you want to inject into the presentational
component.
*/

export default VisibleTodoList;
