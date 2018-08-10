import React from "react";

class Display extends React.Component {
  render() {
    let errorJSX = null;
    let userDataJSX = null;
    let fetchingJSX = null;

    if (this.props.isFetching) {
      fetchingJSX = (
        <h3 style={{ color: "blue" }}>
          Please wait. Details are being fetched...
        </h3>
      );
    }

    if (this.props.error) {
      errorJSX = <h3 style={{ color: "red" }}>{this.props.error}</h3>;
    }

    if (this.props.userDetails.name) {
      userDataJSX = (
        <ul style={{ color: "green" }}>
          <li>Name: {this.props.userDetails.name}</li>
          <li>Company: {this.props.userDetails.company}</li>
          <li>Location: {this.props.userDetails.location}</li>
        </ul>
      );
    }

    return (
      <div>
        {fetchingJSX}
        {errorJSX}
        {userDataJSX}
      </div>
    );
  }
}

export default Display;
