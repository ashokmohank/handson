import React from "react";

class ContactUs extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.location.search);
    return <h1>Contact Us Page</h1>;
  }
}

export default ContactUs;
