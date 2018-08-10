import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <h2>This is {this.props.match.params.level}!</h2>

        {console.log('Component: Content')}
        {console.log(`this.props.location :${JSON.stringify(this.props.location)}`)}
        {console.log(`this.props.match :${JSON.stringify(this.props.match)}`)}
        {console.log(`this.props.history :${JSON.stringify(this.props.history)}`)}
        {console.log('-------------------------------')}

        {location.search !== ''
          ? <p>
            <strong>Query String:</strong>
            {JSON.stringify(location.search, null, 2)}</p>
          : null}
      </div>
    );
  }
}
