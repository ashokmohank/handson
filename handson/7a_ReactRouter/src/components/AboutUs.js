import React from "react";
class AboutUs extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>About Us</h1>
        <p>
          <strong>SearchString : </strong>
          {this.props.location.search}
        </p>
        <p>
          <strong>Path : </strong>
          {this.props.match.path}
        </p>
      </div>
    );
  }
}

export default AboutUs;
