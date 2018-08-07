import React from "react";
import "./index.css";
class App extends React.Component {
  //1.
  constructor(props) {
    super();
    console.log("Constructor called");

    const tz = props.tz;
    const startTime = new Date().toLocaleTimeString(tz);
    this.state = { time: startTime, tz };
  }

  //3.
  componentDidMount() {
    console.log("Component mounted");
    setInterval(() => {
      let currentTime = new Date().toLocaleTimeString(this.props.tz);
      this.setState({ time: currentTime });
      console.log("1 second elapsed");
    }, 1000);
  }

  //2. & 4.
  render() {
    console.log("Rendered");
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default App;
