import { connect } from "react-redux";

import Form from "../components/Form";
import { addTodosAction } from "../actions/todosActions";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodoHandler: text => {
      dispatch(addTodosAction(text));
    },
  };
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
