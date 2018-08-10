import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    const numbers = this.props.numbers;

    // Here array element itself can be used as key as it is unique Keys only make
    // sense in the context of the surrounding array.
    const listItems = numbers.map(number => (
      <ListItem key={number} value={number} />
    ));

    return <ul>{listItems}</ul>;
  }
}
class ListItem extends React.Component {
  render() {
    // Keys don't make sense here
    return <li>{this.props.value}</li>;
  }
}

export { App };
