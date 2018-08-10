import React from 'react';

class Parent extends React.Component {
  concatName(e) {
    alert(e);
  }

  render() {
    return (
      <div><Child clickhandler={this.concatName} /></div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Hello World!',
    };
  }

  changeHandler(ev) {
    this.setState({ title: ev.target.value });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <h2>{this.state.title}</h2>
        <br />
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={this
          .changeHandler
          .bind(this)} 
        />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

// App2
class App2 extends React.Component {

  constructor(props) {
    super(props);
    // Another syntax to bind 'this' with even handler in constructor
    this.clickHandler = this
      .clickHandler
      .bind(this);
  }

  clickHandler(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <a href="http://www.google.com" target="_blank">
          www.google.com
        </a>
        <br />
        <br />
        <a href="http://www.google.com" onClick={this.clickHandler}>
          www.google.com
        </a>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export { Parent, Child, App2 };
