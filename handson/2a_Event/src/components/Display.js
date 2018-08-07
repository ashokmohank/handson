import React from "react";

class Display extends React.Component {
  constructor(props) {
    super();
    console.log("Display Constructor called");
  }

  render() {
    console.log("Display");
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default Display;
