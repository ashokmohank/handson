import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          size="40"
          defaultValue="https://api.github.com/users/gaearon"
          ref={node => {
            this.textBox = node;
          }}
        />
        &nbsp;&nbsp;
        <input
          type="button"
          value="Fetch User Details..."
          onClick={() => {
            this.props.fetchHandler(this.textBox.value);
          }}
        />
      </form>
    );
  }
}

export default Form;
