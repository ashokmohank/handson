import React, { Component } from "react";

class App1 extends Component {
  render() {
    return (
      <p>
        App1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus voluptas tempore, doloribus tenetur distinctio provident
        eaque labore natus. Ab quasi nam nemo voluptate dolore aperiam qui
        necessitatibus veritatis id dolores.
      </p>
    );
  }
}

class App2 extends Component {
  render() {
    return (
      <p>
        App2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus voluptas tempore, doloribus tenetur distinctio provident
        eaque labore natus. Ab quasi nam nemo voluptate dolore aperiam qui
        necessitatibus veritatis id dolores.
      </p>
    );
  }
}

class App3 extends Component {
  render() {
    return (
      <p className="app1">
        App3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus voluptas tempore, doloribus tenetur distinctio provident
        eaque labore natus. Ab quasi nam nemo voluptate dolore aperiam qui
        necessitatibus veritatis id dolores.
      </p>
    );
  }
}

class App4 extends Component {
  render() {
    return (
      <p className="app2">
        App4: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus voluptas tempore, doloribus tenetur distinctio provident
        eaque labore natus. Ab quasi nam nemo voluptate dolore aperiam qui
        necessitatibus veritatis id dolores.
      </p>
    );
  }
}

class App5 extends Component {
  render() {
    /*
    .app1 {
      padding: 10px;
      margin: 10px;
      background-color: fuchsia;
      color: #333;
      display: inline-block;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 15px;
      text-align: center;
    }
    */

    // Replace semi-colon with commas as this is a JS object
    const appStyle = {
      padding: 10, // No need to mention 'px'
      margin: 100 / 10, // Expressions are permitted.
      backgroundColor: "fuchsia", // attribute names with hyphen need to be changed to camelCase because JS identifier can't cantain a -
      color: "#333",
      display: "inline-block", // string values must be in quotes
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif ",
      fontSize: 15,
      textAlign: "center",
    };

    return (
      <p style={appStyle}>
        App5: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus voluptas tempore, doloribus tenetur distinctio provident
        eaque labore natus. Ab quasi nam nemo voluptate dolore aperiam qui
        necessitatibus veritatis id dolores.
      </p>
    );
  }
}
export { App1, App2, App3, App4, App5 };
