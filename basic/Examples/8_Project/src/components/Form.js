import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          ref={node => {
            this.textBox = node;
          }}
        />
        &nbsp;&nbsp;
        <input
          type="button"
          value="Add Todo"
          onClick={() => {
            if (this.textBox.value === "") {
              alert("Enter Todo!");
              this.textBox.focus();
              return false;
            }

            this.props.addTodoHandler(this.textBox.value);
            this.textBox.value = "";
            this.textBox.focus();
          }}
        />
      </form>
    );
  }
}

export default Form;
