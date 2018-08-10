import React from "react";

class FilterLink extends React.Component {
  render() {
    console.log(this.props);
    const styleObj = this.props.active
      ? { textDecoration: "none", color: "red" }
      : {};

    return (
      <a
        href="#"
        style={styleObj}
        onClick={() => {
          this.props.filterHandler(this.props.text);
        }}
      >
        {this.props.text}
      </a>
    );
  }
}

export default FilterLink;
