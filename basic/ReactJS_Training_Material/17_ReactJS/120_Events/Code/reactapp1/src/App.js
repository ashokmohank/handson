/*global incrCount*/
/*
Above line is required as create-react-app uses ESLint internally and that throws an error when a variable is assigned to an arrow function inside react component class. See link below:

https://stackoverflow.com/questions/40466492/how-to-fix-error-fb-is-not-define d-no-undef-on-create-react-app-project
*/

import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <CounterDisplay
        cntr={this.state.count}
        clickhandler={this.incrementCount.bind(this)}
      />
    );
  }
}

class CounterDisplay extends React.Component {
  render() {
    return (
      <form action="">
        <br />
        <br />
        <button type="button" onClick={this.props.clickhandler}>
          Increment
        </button>
        <br />
        <br />
        <br />
        <h2>Counter: {this.props.cntr}</h2>
      </form>
    );
  }
}

// Using Arrow functions. No need to bind handler to 'this' if arrow is function
// used
class CounterArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrCount = () => {
    console.log("test");
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <form action="">
          <br />
          <br />
          <button type="button" onClick={this.incrCount}>
            Increment
          </button>
          <br />
          <br />
          <br />
          <h2>Counter: {this.state.count}</h2>
        </form>
      </div>
    );
  }
}

export { Counter, CounterArrow };
