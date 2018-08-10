import { connect } from "react-redux";

import Display from "../components/Display";

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.isFetching,
    userDetails: state.userDetails,
    error: state.error,
  };
}

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
