import React from "react";

export default class Red extends React.Component {
  render() {
    return (
      <div>
        <span style={this.props.highlight}>{this.props.sportname}</span>{" "}
        <span>{this.props.price}</span>
      </div>
    );
  }
}
