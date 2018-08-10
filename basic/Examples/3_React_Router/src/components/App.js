import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PromptDemo from "./Prompt";
import RedirectDemo from "./RedirectDemo";

import "./menu.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="activeMenu" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeMenu" to="/contactus">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeMenu" to="/aboutus/100">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeMenu" to="/prompt_demo">
              Prompt
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeMenu" to="/redirect_demo">
              Redirect
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/aboutus/:id" render={() => <AboutUs prop1={1000} />} />
          <Route path="/prompt_demo" component={PromptDemo} />
          <Route path="/redirect_demo" component={RedirectDemo} />
          <Route
            path="*"
            render={props => (
              <h2 style={{ color: "red" }}>
                {props.location.pathname}: 404-Page not found!
              </h2>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
