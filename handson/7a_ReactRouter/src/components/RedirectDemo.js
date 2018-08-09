import React from "react";
import { Redirect } from "react-router-dom";

class RedirectDemo extends React.Component {
  render() {
    let jsx = "";
    let loggedIn = false;
    if (!loggedIn) {
      jsx = <Redirect to="/aboutus" />;
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
