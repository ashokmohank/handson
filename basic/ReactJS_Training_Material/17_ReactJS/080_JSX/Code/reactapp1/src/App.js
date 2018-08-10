import React, { Component } from 'react';

class App1 extends Component {
  render() {
    return (
      <h2>1 + 2 + 3 + 4 + 5 = {1 + 2 + 3 + 4 + 5}</h2>
    );
  }
}

class App2 extends Component {
  render() {
    return (
      <h2>Math.sqrt(1600) = {Math.sqrt(1600)}</h2>
    );
  }
}

// props usage
class App3 extends Component {
  render() {
    return (
      <h2>this.props.name = {this.props.name}</h2>
    );
  }
}

// Ternary operator usage
class App4 extends Component {
  render() {
    const x = 101;
    return (
      <span>x===100?Hundred:Not Hundred = {x === 100
          ? <h2>Hundred</h2>
          : <h2>Not Hundred</h2>}</span>
    );
  }
}

// Comments inside JSX
class App5 extends Component {
  render() {
    return (
      <h2>Comments : {/* Comment Block */}</h2>
    );
  }
}

// Assigning JSX to a variable
class App6 extends Component {
  render() {
    const text = <h2>Header-2</h2>;

    return (
      <span>{text}</span>
    );
  }
}

export {
  App1,
  App2,
  App3,
  App4,
  App5,
  App6,
};
