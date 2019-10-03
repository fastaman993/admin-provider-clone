import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import localStorage from "local-storage";

class AdminNavbarLinks extends Component {
  logout = () => {
    localStorage.remove("token");
  };
  render() {
    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={3} onClick={this.logout}>
            <Link to={"/login"}>Log out</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
{
  /* <Link to={"/"}>
<span className="navbar-text " onClick={logout}>
  <i class="fas fa-sign-in-alt"></i>
  {" Logout"}
</span> */
}

export default AdminNavbarLinks;
