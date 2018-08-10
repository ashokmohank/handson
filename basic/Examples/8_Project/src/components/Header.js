import React from "react";

import FilterLink from "./FilterLink";

class Header extends React.Component {
  render() {
    return (
      <div>
        <FilterLink
          text="All"
          active={this.props.filter === "SHOW_ALL"}
          filterHandler={this.props.filterHandler}
        />
        &nbsp;|&nbsp;
        <FilterLink
          text="Active"
          active={this.props.filter === "SHOW_ACTIVE"}
          filterHandler={this.props.filterHandler}
        />
        &nbsp;|&nbsp;
        <FilterLink
          text="Completed"
          active={this.props.filter === "SHOW_COMPLETED"}
          filterHandler={this.props.filterHandler}
        />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Header;
