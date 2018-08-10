import React from "react";
import { incrementCounter, changeStep } from "../actions";

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleIncrement(ev) {
    this.props.dispatch(incrementCounter(this.props.step));
    ev.preventDefault();
  }

  handleDecrement(ev) {
    this.props.decrementCount(this.props.step);
    ev.preventDefault();
  }

  handleStepChange(ev) {
    this.props.dispatch(changeStep(this.txtStep.value));
    ev.preventDefault();
  }

  render() {
    console.log("this.props: ", this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <hr />
        <h3>Counter: {this.props.counter}</h3>
        <br />
        <br />
        <form>
          Step:{" "}
          <input
            type="number"
            ref={node => {
              this.txtStep = node;
            }}
            onChange={this.handleStepChange}
          />
          <br />
          <br />
          <button type="button" onClick={this.handleIncrement}>
            Increment
          </button>
          &nbsp;&nbsp;
          <button type="button" onClick={this.handleDecrement}>
            Decrement
          </button>
        </form>
      </div>
    );
  }
}

export default Presentational;
