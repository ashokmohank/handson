import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';

const App = () => (
  <div>
    <ul>
      <li>
        <NavLink activeClassName="activeNav" exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNav" to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNav" to="/contactus">Contact Us</NavLink>
      </li>
    </ul>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={AboutUs} />
      <Route path="/contactus" component={ContactUs} />
      <Route
        path="*"
        render={() => (
          <h1>404 - Page not found!</h1>
      )} 
      />
    </Switch>
  </div>
);

const Home = () => (
  <h1>Home Page</h1>
);

const AboutUs = () => (
  <h1>About Us</h1>
);

const ContactUs = props => (
  <div>
    {console.log(props.match.url)}

    <ul>
      <li>
        <Link to={`${props.match.url}/r1`}>Route-1</Link>
      </li>
      <li>
        <Link to={`${props.match.url}/r2`}>Route-2</Link>
      </li>
      <li>
        <Link to={`${props.match.url}/r3`}>Route-3</Link>
      </li>
    </ul>

    <Switch>
      <Route path={`${props.match.url}`} exact component={null} />
      <Route path={`${props.match.url}/r1`} component={MyRoute} />

      <Route path={`${props.match.url}/r2`} component={MyRoute} />

      <Route path={`${props.match.url}/r3`} component={MyRoute} />

      <Route
        path="*"
        render={() => (
          <h1>404 - Page not found!</h1>
      )} 
      />

    </Switch>
  </div>
);

const MyRoute = props => (
  <h1>Route: {props.match.url}</h1>
);

export default App;
