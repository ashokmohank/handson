import Display from "../components/Display";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return { val: state.count };
}

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
