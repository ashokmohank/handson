import React from "react";

class Form extends React.Component {
  render() {
    const { incrHandler, decrHandler } = this.props;
    return (
      <form>
        <input
          type="button"
          value="Increment"
          onClick={() => {
            incrHandler(100);
          }}
        />
        &nbsp;&nbsp;
        <input type="button" value="Decrement" onClick={decrHandler} />
      </form>
    );
  }
}

export default Form;
