import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Content from './Content';
import NoMatch from './NoMatch';

export default class BasicRouting extends Component {
  render() {
    // const pathname  = this.props.location.pathname
    return (
      <div>

        {console.log('Component: Miss')}
        {console.log(`this.props.location :${JSON.stringify(this.props.location)}`)}
        {console.log(`this.props.match :${JSON.stringify(this.props.match)}`)}
        {console.log(`this.props.history :${JSON.stringify(this.props.history)}`)}
        {console.log(`this.props.history :${JSON.stringify(this.props.history)}`)}
        {console.log('-------------------------------')}

        <h1>Handling a Missed Route {this.props.match.url}</h1>
        <p>Try clicking on the links below to find a miss.</p>
        <div className="leftNavi">
          <ul>
            <li>
              <Link className="active" to={`${this.props.match.url}/abc/level1`}>Level 1</Link>
            </li>
            <li>
              <Link className="active" to={`${this.props.match.url}/level2`}>Level 2</Link>
            </li>
            <li>
              <Link className="active" to={`${this.props.match.url}/abc/level3`}>Level 3</Link>
            </li>
          </ul>
        </div>
        <div className="rightContent">
          <p>Second Level Content will appear here:</p>
          <Switch>
            <Route path={`${this.props.match.url}/abc/:level`} component={Content} />
            <Route path={`${this.props.match.url}`} exact render={() => (null)} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}
