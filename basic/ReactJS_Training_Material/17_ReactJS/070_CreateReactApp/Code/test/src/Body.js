import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

class Body extends React.Component {
  render() {
    const x = 100;
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route
            path="*"
            render={props => <AboutUs {...props} someprop={x} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Body;
