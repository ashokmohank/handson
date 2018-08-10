import React from "react";

import Form from "./Form";
import Display from "./Display";

class App extends React.Component {
  constructor() {
    super();

    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(x) {
    this.setState(prevState => ({ count: ++prevState.count }));
  }

  decrement() {
    this.setState(prevState => ({ count: --prevState.count }));
  }

  render() {
    return (
      <div>
        <Form incrHandler={this.increment} decrHandler={this.decrement} />

        <Display val={this.state.count} />
      </div>
    );
  }
}

export default App;
