import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.formSubmitHandler = this.formSubmitHandler.bind(this);

    this.inputChangeHandler = this.inputChangeHandler.bind(this);

    this.setFocus = this.setFocus.bind(this);

    this.state = {
      textInput3: "",
    };
  }

  inputChangeHandler(ev) {
    this.setState({ textInput3: ev.target.value });
  }

  formSubmitHandler(ev) {
    ev.preventDefault();

    alert(`this.refs.textInputNode1.value: ${this.refs.textInputNode1.value}`);
    alert(`this.textInputNode2.value: ${this.textInputNode2.value}`);
    alert(`this.state.textInput3: ${this.state.textInput3}`);

    this.refs.textInputNode1.focus();
  }

  setFocus(ev) {
    // Call custom method in the component class
    this.InputText.focusOnInputText();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <input ref="textInputNode1" type="text" /> {" ---- Deprecated Ref "}
          <br />
          <br />

          <input
            type="text"
            ref={node => {
              this.textInputNode2 = node;
            }}
          />{" "}

          {" ---- Callback Ref "}
          <hr />
          <br />
          <br />
          <InputText
            ref={node => {
              this.InputText = node;
            }}
          />{" "}
          {" ---- Component Ref "}
          <hr />
          <br />
          <br />
          <input
            type="text"
            value={this.state.textInput3}
            onChange={this.inputChangeHandler}
          />{" "}
          <span>{this.state.textInput3}</span>
          <hr />
          <br />
          <br />{" "}
          {/* With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a defaultValue attribute instead of value.

          Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue. */}
          <input value="default text" type="text" />&nbsp;&nbsp;
          <input defaultValue="default text" type="text" />
          <br />
          <br />
          <button type="submit">Hit Me!</button>&nbsp;&nbsp;
          <button type="button" onClick={this.setFocus}>
            Focus on InputText
          </button>
        </form>
      </div>
    );
  }
}

class InputText extends React.Component {
  focusOnInputText() {
    this.textInput.focus();
  }
  render() {
    return (
      <input
        type="text"
        ref={node => {
          this.textInput = node;
        }}
      />
    );
  }
}

export default App;
