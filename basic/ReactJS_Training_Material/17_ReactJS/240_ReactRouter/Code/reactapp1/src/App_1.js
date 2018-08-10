import React from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    <hr />

    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = props => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={props.match.url}
      render={() => (
        <h3>Please select a topic.</h3>
    )} 
    />
  </div>
);

const Topic = props => (
  <div>
    <h1>{props.match.params.topicId}</h1>
  </div>
);

export default App;
