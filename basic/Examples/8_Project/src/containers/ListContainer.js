import { connect } from "react-redux";

import List from "../components/List";
import { toggleTodosAction } from "../actions/todosActions";

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleHandler: id => {
      dispatch(toggleTodosAction(id));
    },
  };
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;
