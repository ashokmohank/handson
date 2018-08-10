import React from "react";
import { Redirect } from "react-router-dom";

class RedirectDemo extends React.Component {
  render() {
    const loggedIn = false;
    let jsx;

    if (!loggedIn) {
      jsx = <Redirect to="/contactus" />;
    }
    return (
      <div>
        <h1>Redirect Demo</h1>
        {jsx}
      </div>
    );
  }
}

export default RedirectDemo;
