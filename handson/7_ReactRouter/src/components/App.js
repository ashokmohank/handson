import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
class App extends React.Component {
  //1.

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route
            path="*"
            render={() => {
              return <div>Page not Found!</div>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
