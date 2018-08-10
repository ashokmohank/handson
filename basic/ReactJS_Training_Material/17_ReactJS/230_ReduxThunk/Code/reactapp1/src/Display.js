import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Github ID: {this.props.data.login}</h4>
        <h4>Name: {this.props.data.name}</h4>
        <h4>Company: {this.props.data.company}</h4>
        <h4>Bio: {this.props.data.bio}</h4>
        <h4>Followers: {this.props.data.followers}</h4>
      </div>
    );
  }
}

export default Display;
