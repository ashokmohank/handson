import React from 'react';

/*
Go to .eslintrc.json to enable rules that will show errors in below code
*/
// no-unused-vars

class MyComp1 extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

class MyComp2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello</h1>;
  }
}
