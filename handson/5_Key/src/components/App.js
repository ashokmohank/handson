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

    const { colors } = this.props;

    //let jsx = colors.map(element => <li key={element}>{element}</li>);
    //if Custom components, the iteration components should have keys
    let jsx = colors.map(element => <LI key={element}>{element}</LI>);
    return <ul>{jsx}</ul>;
  }
}

const LI = props => <li>{props.val}</li>;
//prop-types checks the valid/required props for components
//https://www.npmjs.com/package/prop-types
App.propTypes = {
  testProp: PropTypes.array
};
export default App;
