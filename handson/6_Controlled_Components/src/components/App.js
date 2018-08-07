import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  //1.
  constructor(props) {
    super(props);
    //Controlled Approach
    this.state = {
      text: "",
      option: true
    };
    this.ctrlTextChange = this.ctrlTextChange.bind(this);
    this.ctrlOptChange = this.ctrlOptChange.bind(this);
    this.ctrledClick = this.ctrledClick.bind(this);
    //Un Controlled approach
    this.unCtrledClick = this.unCtrledClick.bind(this);
  }

  ctrlTextChange(ev) {
    this.setState({ text: ev.target.value });
    console.log("Controlled textarea change", ev.target.value);
  }

  ctrlOptChange(ev) {
    this.setState({ option: ev.target.checked });
    console.log("Controlled Option select", ev.target.checked);
  }

  ctrledClick() {
    const formValues = {
      formText: this.state.text,
      formOption: this.state.option
    };
    console.log("Controlled Click", formValues);
  }

  unCtrledClick() {
    const formValues = {
      formText: this.ucTextArea.value,
      formOption: this.ucRadio.checked
    };
    console.log("Un Controlled Click", formValues);
  }

  render() {
    return (
      <div>
        <form>
          <h1>Controlled Form</h1>
          <textarea rows="4" cols="50" onChange={this.ctrlTextChange} />
          <br />
          {this.state.text}
          <br />
          <input
            type="radio"
            onChange={this.ctrlOptChange}
            checked={this.state.option}
          />Option
          <br />
          <br />
          <input type="button" value="Submit Form" onClick={this.ctrledClick} />
        </form>
        <hr />
        <form>
          <h1>UnControlled Form</h1>
          <textarea
            rows="4"
            cols="50"
            ref={node => {
              this.ucTextArea = node;
            }}
          />
          <br />
          <br />
          <input
            type="radio"
            ref={node => {
              this.ucRadio = node;
            }}
          />Option
          <br />
          <br />
          <input
            type="button"
            value="Submit Form"
            onClick={this.unCtrledClick}
          />
        </form>
        <hr />
      </div>
    );
  }
}

const LI = props => <li>{props.val}</li>;
//prop-types checks the valid/required props for components
//https://www.npmjs.com/package/prop-types
App.propTypes = {
  testProp: PropTypes.array
};
export default App;
