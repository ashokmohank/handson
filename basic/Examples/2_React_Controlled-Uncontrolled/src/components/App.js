import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.ucClicked = this.ucClicked.bind(this);
    this.cClicked = this.cClicked.bind(this);
    this.textChange = this.textChange.bind(this);
    this.checkClick = this.checkClick.bind(this);

    this.state = {
      text: "default",
      check: true,
    };
  }

  ucClicked() {
    const formValues = {
      text: this.ucTextbox.value,
      check: this.ucCheckbox.checked,
    };

    console.log("UnControlled: ", formValues);
  }

  cClicked(ev) {
    const formValues = {
      text: this.state.text,
      check: this.state.check,
    };

    ev.preventDefault();

    console.log("Controlled: ", formValues);
  }

  textChange(ev) {
    this.setState({ text: ev.target.value });
  }

  checkClick(ev) {
    this.setState({ check: ev.target.checked });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            defaultValue="sreekanth"
            ref={node => {
              this.ucTextbox = node;
            }}
          />
          <br />
          <br />
          <input
            type="checkbox"
            defaultChecked
            ref={node => {
              this.ucCheckbox = node;
            }}
          />
          <br />
          <br />
          <input type="button" value="Submit Form" onClick={this.ucClicked} />
          <hr />

          <input
            type="text"
            onChange={this.textChange}
            value={this.state.text}
          />
          {this.state.text}
          <br />
          <br />
          <input
            type="checkbox"
            onChange={this.checkClick}
            checked={this.state.check}
          />
          <br />
          <br />
          <input type="submit" value="Submit Form" onClick={this.cClicked} />
        </form>
      </div>
    );
  }
}

export default App;
