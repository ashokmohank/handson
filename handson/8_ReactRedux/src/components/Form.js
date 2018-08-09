import React from "react";
import { incrementAction, decrementAction } from "../actions/counterActions";
import { connect } from "react-redux";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.incrementHandle = this.incrementHandle.bind(this);
    this.decrementHandle = this.decrementHandle.bind(this);
  }

  incrementHandle() {
    console.log("Form this.props", this.props);
    const { dispatch } = this.props;
    dispatch(incrementAction());
  }

  decrementHandle() {
    console.log("Decrement");
    this.props.dispatch(decrementAction());
  }

  render() {
    return (
      <form>
        <input type="button" value="Increment" onClick={this.incrementHandle} />{" "}
        <input type="button" value="Decrement" onClick={this.decrementHandle} />
      </form>
    );
  }
}

const FormContainer = connect()(Form);
export default FormContainer;
