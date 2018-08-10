import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Blocking extends Component {
  render() {
    return (
      <div>

        {console.log('Component: Blocking')}
        {console.log(`this.props.location :${JSON.stringify(this.props.location)}`)}
        {console.log(`this.props.match :${JSON.stringify(this.props.match)}`)}
        {console.log(`this.props.history :${JSON.stringify(this.props.history)}`)}
        {console.log('-------------------------------')}

        <h1>Blocking a transition!</h1>
        <p>{this.props.location.pathname}<br /><br />
          You can block a transition and have a Navigation prompt with the appropriate
          message.
        </p>

        <Prompt message="Are you sure you want to leave this page?" />

      </div>
    );
  }
}
