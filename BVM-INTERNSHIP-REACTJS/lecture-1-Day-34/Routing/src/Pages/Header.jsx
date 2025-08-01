import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
// import SignUp from "./signup";

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li>
                <Link to={Login}>Login</Link>
              </li>
              <li>
                <Link to={Login}>SignUp</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
