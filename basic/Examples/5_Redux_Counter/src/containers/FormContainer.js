import { connect } from "react-redux";

import Form from "../components/Form";

import { incrementAction, decrementAction } from "../actions/counterActions";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    incrementHandler: () => {
      dispatch(incrementAction());
    },
    decrementHandler: () => {
      dispatch(decrementAction());
    },
  };
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
