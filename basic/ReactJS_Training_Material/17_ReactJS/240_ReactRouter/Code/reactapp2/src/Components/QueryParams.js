import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Content from './Content';

export default class QueryParams extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>

        {console.log('Component: QueryParams')}
        {console.log(`this.props.location :${JSON.stringify(this.props.location)}`)}
        {console.log(`this.props.match :${JSON.stringify(this.props.match)}`)}
        {console.log(`this.props.history :${JSON.stringify(this.props.history)}`)}
        {console.log('-------------------------------')}

        <h1>Reading the query parameters.</h1>
        <p>Check out the links below to view the queryparams value.</p>
        <div className="leftNavi">
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/level1`,
                  search: '?abc=23',
                }}
                className="active"
              >Level 1</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/level2`,
                  search: '?abc=2&xyz=4',
                }}
                className="active"
              >Level 2</Link>
            </li>
            <li>
              <Link to={`${match.url}/level3?xyz=HavingFun`} className="active">Level 3</Link>
            </li>
          </ul>
        </div>
        <div className="rightContent">
          <p>Second Level Content will appear here:</p>

          <Route path={`${match.url}/:level`} component={Content} />

        </div>
      </div>
    );
  }
}
