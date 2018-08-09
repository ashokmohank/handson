import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import PromptDemo from "./PromptDemo";
import RedirectDemo from "./RedirectDemo";
import GetInfo from "./GetInfo";

import "./menu.css";
class App extends React.Component {
  //1.

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
            <NavLink activeClassName="activeMenu" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeMenu" to="/get/:id">
              Get Information with params
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeMenu" to="/promptdemo">
              Prompt Demo
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeMenu" to="/redirectdemo">
              Redirect Demo
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/get/:id" component={GetInfo} />
          <Route path="/promptdemo" component={PromptDemo} />
          <Route path="/redirectdemo" component={RedirectDemo} />
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
