import React from "react";

class Form extends React.Component {
  //1.
  constructor(props) {
    super(props);
    console.log("Form Constructor called");
  }

  render() {
    console.log("Form Rendered");
    //use to make code more readable
    //const {incHandler, decHandler} = this.props;

    //this.props.incHandler(10) passes the value '10' back to parent
    return (
      <div>
        <form>
          <input
            type="button"
            value="increment"
            onClick={() => {
              this.props.incHandler(10);
            }}
          />
          &nbsp;
          <input
            type="button"
            value="decrement"
            onClick={this.props.decHandler}
          />
        </form>
      </div>
    );
  }
}

export default Form;
