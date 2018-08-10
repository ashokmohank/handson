import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Content from './Content';

export default class BasicRouting extends Component {
  render() {
    return (
      <div>

        {console.log('Component: BasicRouting')}
        {console.log(`this.props.location :${JSON.stringify(this.props.location)}`)}
        {console.log(`this.props.match :${JSON.stringify(this.props.match)}`)}
        {console.log(`this.props.history :${JSON.stringify(this.props.history)}`)}
        {console.log('-------------------------------')}

        <h1>BasicRouting</h1>
        <p>Select a level from Left Navigation to view the content, also notice the
          change in URL.</p>
        <div className="leftNavi">
          <ul>
            <li>
              <Link to={`${this.props.match.url}/level1`} className="active">Level 1</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/level2`} className="active">Level 2</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/level3`} className="active">Level 3</Link>
            </li>
          </ul>
        </div>
        <div className="rightContent">
          <p>Second Level Content will appear here:</p>
          {/* <Switch> */}
          <Route path={`${this.props.match.url}/:level`} component={Content} /> {/* </Switch> */}
        </div>
      </div>
    );
  }
}
