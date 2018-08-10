import React from 'react';

// ---------App1--------------
class ClockWithoutState extends React.Component {
  render() {
    const element = (
      <div>
        <h1>Current Time (ClockWithoutState):</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
      </div>
    );

    return (element);
  }
}

// ---------App2--------------
class ClockWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ts: (new Date().toLocaleTimeString()),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        ts: (new Date().toLocaleTimeString()),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const element = (
      <div>
        <h1>Current Time (ClockWithState):</h1>
        <h2>{this.state.ts}</h2>
      </div>
    );

    return (element);
  }
}

// ---------App3--------------
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const element = (
      <div>
        <form action="">
          <br />
          <br />
          <button
            type="button"
            onClick={this
            .incrementCount
            .bind(this)}
          >Increment</button>
          <br />
          <br />
          <br />
          <h2>Counter: {this.state.count}</h2>
        </form>
      </div>
    );
    return (element);
  }
}
export { ClockWithoutState, ClockWithState, Counter };
