import React, { Component } from 'react';

export default class NoMatch extends Component {
  render() {
    return (
      <div>

        {console.log('Component: NoMatch')}
        {console.log(`this.props.location :${JSON.stringify(this.props.location)}`)}
        {console.log(`this.props.match :${JSON.stringify(this.props.match)}`)}
        {console.log(`this.props.history :${JSON.stringify(this.props.history)}`)}
        {console.log('-------------------------------')}

        <h2>Sorry no content available at {this.props.location.pathname}!</h2>
      </div>
    );
  }
}
