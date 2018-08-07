import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  //1.
  constructor(props) {
    super(props);
    console.log("Constructor called");
    this.state = { count: 0 };
  }

  render() {
    console.log("Rendered");
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

//prop-types checks the valid/required props for components
//https://www.npmjs.com/package/prop-types
App.propTypes = {
  testProp: PropTypes.number.isRequired
};
export default App;
