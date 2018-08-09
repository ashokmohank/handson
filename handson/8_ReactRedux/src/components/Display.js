import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    return <h1>{this.props.val}</h1>;
  }
}

function mapStateToProps(state, ownProps) {
  return { val: state.count };
}

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
