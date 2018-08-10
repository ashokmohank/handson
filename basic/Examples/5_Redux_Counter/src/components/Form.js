import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="button"
          value="Increment"
          onClick={() => {
            this.props.incrementHandler();
          }}
        />
        &nbsp;
        <input
          type="button"
          value="Decrement"
          onClick={() => {
            this.props.decrementHandler();
          }}
        />
      </form>
    );
  }
}

export default Form;
