import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import BasicRouting from './Components/BasicRouting';
import Blocking from './Components/Blocking';
import Miss from './Components/Miss';
import QueryParams from './Components/QueryParams';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/basic-routing" activeClassName="active">BasicRouting</NavLink>
          </li>
          <li>
            <NavLink to="/blocking" activeClassName="active">Blocking</NavLink>
          </li>
          <li>
            <NavLink to="/miss" activeClassName="active">Miss</NavLink>
          </li>
          <li>
            <NavLink to="/query-params" activeClassName="active">Query Params</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/" component={Home} exact />{/* Exact match only */}
          <Route path="/basic-routing" component={BasicRouting} />
          <Route path="/blocking" component={Blocking} />
          <Route path="/miss" component={Miss} />
          <Route path="/query-params" component={QueryParams} />
          <Route
            render={() => (
              <h2 >404 - Page Not Found!<br /><br /><br />
                Sorry... no content available at the URL requested by you!</h2>
            )}
          />{/* Switch will run this Route if none of the above paths match */}
        </Switch>
      </div>
    );
  }
}

export default App;
