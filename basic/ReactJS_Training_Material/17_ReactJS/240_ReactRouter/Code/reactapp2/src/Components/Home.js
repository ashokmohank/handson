import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>

        {console.log('Component: Home')}
        {console.log(`this.props.location :${JSON.stringify(this.props.location)}`)}
        {console.log(`this.props.match :${JSON.stringify(this.props.match)}`)}
        {console.log(`this.props.history :${JSON.stringify(this.props.history)}`)}
        {console.log('-------------------------------')}

        <h1>React-Router v4!</h1>
        <p>We will be learning about React-Router v4. This example will cover all the
          new components of react-router.</p>
        <p>With v4 routes are managed just like any other react component. It offers a
          &quot;Route&quot; component, which matches the pattern specified in props with
          the current location/window.pathname.</p>
      </div>
    );
  }
}
