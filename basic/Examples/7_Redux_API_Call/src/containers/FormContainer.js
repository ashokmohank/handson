import { connect } from "react-redux";

import Form from "../components/Form";
import fetchUserDetailsAction from "../actions/userDetailsActions";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchHandler: url => {
      dispatch(fetchUserDetailsAction(url));
    },
  };
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
