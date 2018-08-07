import React from "react";
import Form from "./Form";
import Display from "./Display";

class App extends React.Component {
  //1.
  constructor(props) {
    super(props);
    console.log("Constructor called");
    this.state = { count: 0 };
    //the scope of 'this' lies within window, hence the 'this' is binded to the function
    //If function is NOT binded 'this' will be undefined when printed from called function
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  increment(childValue) {
    //If function is NOT binded 'this' will be undefined when printed from called function
    //console.log("this", this);

    //This may NOT work as setState is asynchronous and may count inapporpriate to clicks
    //this.setState({ count: this.state.count + 1 });
    this.setState(prevState => ({ count: ++prevState.count }));
    //get Value from the Child
    console.log(childValue);
  }

  decrement() {
    //This may NOT work as setState is asynchronous and may count inapporpriate to clicks
    //this.setState({ count: this.state.count - 1 });
    this.setState(prevState => ({ count: --prevState.count }));
  }

  render() {
    console.log("Rendered");
    return (
      <div>
        <Form incHandler={this.increment} decHandler={this.decrement} />
        <Display count={this.state.count} />
      </div>
    );
  }
}

export default App;
