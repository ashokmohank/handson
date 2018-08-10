import React from "react";

class ListItem extends React.Component {
  render() {
    let jsx;

    if (this.props.complete) {
      jsx = <del>{this.props.task}</del>;
    } else {
      jsx = this.props.task;
    }

    return (
      <li
        onClick={() => {
          this.props.toggleHandler(this.props.id);
        }}
      >
        {jsx}
      </li>
    );
  }
}

export default ListItem;
