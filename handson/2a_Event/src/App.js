import React from "react";
import "./index.css";
class App extends React.Component {
  //1.
  constructor(props) {
    super();
    console.log("Constructor called");
    this.state = { count: 0 };
    //the scope of 'this' lies within window, hence the 'this' is binded to the function
    //If function is NOT binded 'this' will be undefined when printed from called function
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    //If function is NOT binded 'this' will be undefined when printed from called function
    //console.log("this", this);

    //This may NOT work as setState is asynchronous and may count inapporpriate to clicks
    //this.setState({ count: this.state.count + 1 });
    this.setState(prevState => ({ count: ++prevState.count }));
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
        <form>
          <input type="button" value="increment" onClick={this.increment} />
          &nbsp;
          <input type="button" value="decrement" onClick={this.decrement} />
        </form>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
