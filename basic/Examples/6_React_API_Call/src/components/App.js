import React from "react";
import axios from "axios";

import Form from "./Form";
import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: {},
      error: "",
      isFetching: false,
    };

    this.getUserDetails = this.getUserDetails.bind(this);
  }

  getUserDetails(url) {
    this.setState({
      userDetails: {},
      error: "",
      isFetching: true,
    });

    axios
      .get(url)
      .then(response => {
        this.setState({
          userDetails: response.data,
          error: "",
          isFetching: false,
        });
      })
      .catch(error => {
        this.setState({
          userDetails: {},
          error: error.message,
          isFetching: false,
        });
      });
  }

  render() {
    return (
      <div>
        <Form handler={this.getUserDetails} />
        <Display
          userDetails={this.state.userDetails}
          error={this.state.error}
          isFetching={this.state.isFetching}
        />
      </div>
    );
  }
}

export default App;
