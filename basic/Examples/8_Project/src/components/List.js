import React from "react";

import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const jsx = this.props.todos.map(element => {
      switch (this.props.filter) {
        case "SHOW_ACTIVE":
          if (element.completed === true) return;
          break;
        case "SHOW_COMPLETED":
          if (element.completed !== true) return;
          break;
        default:
          // do nothing
          break;
      }

      return (
        <ListItem
          key={element.id}
          id={element.id}
          task={element.text}
          complete={element.completed}
          toggleHandler={this.props.toggleHandler}
        />
      );
    });

    return <ul>{jsx}</ul>;
  }
}

export default List;
