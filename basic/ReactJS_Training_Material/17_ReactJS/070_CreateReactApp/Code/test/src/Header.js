import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="activeNavigationLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavigationLink" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavigationLink" to="/contactus">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
