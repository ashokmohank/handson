import React from "react";

class ClockWithState extends React.Component {
  constructor(props) {
    console.log("Constructor...");
    super(props);
    this.state = {
      ts: new Date().toLocaleTimeString(),
    };
  }

  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
    this.timer = setInterval(() => {
      this.setState({
        ts: new Date().toLocaleTimeString(),
      });
      console.log(this.state.ts);
    }, 5000);
    console.log("---------------------");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps()");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate()");
    return false; // setting this to false will prevent update
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
    console.log("---------------------");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.timer);
  }

  render() {
    console.log("render...");
    const element = (
      <div>
        <h1>Current Time (ClockWithState):</h1>
        <h2>{this.state.ts}</h2>
      </div>
    );

    return element;
  }
}

export default ClockWithState;
