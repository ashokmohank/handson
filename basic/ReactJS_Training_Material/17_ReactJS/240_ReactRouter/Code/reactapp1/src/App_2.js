import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" component={Contact} />
      <Route
        path="*"
        render={() => (
          <h2>
          404 - Page not Found !</h2>
      )} 
      />
    </Switch>
  </div>
);

const Home = () => <h1>Home Page</h1>;

const About = () => <h1>About Us Page</h1>;

const Contact = props => (
  <div >
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
    {console.log(`Query String: ${props.location.search}`)}

    <Switch>
      <Route path={`${props.match.url}`} exact component={null} />
      <Route path={`${props.match.url}/r1`} component={RouteComponent} />
      <Route path={`${props.match.url}/r2`} component={RouteComponent} />
      <Route path={`${props.match.url}/r3`} component={RouteComponent} />
      <Route
        path="*"
        render={() => (
          <h2>
          404 - Page not Found !</h2>
      )} 
      />
    </Switch>
  </div>
);

const RouteComponent = props => <h1>Route Component {props.match.url}</h1>;
export default App;
