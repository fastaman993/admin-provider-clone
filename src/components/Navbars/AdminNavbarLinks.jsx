import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";
import localStorage from "local-storage";

class AdminNavbarLinks extends Component {
  logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={3} onClick={this.logout}>
            <span style={{ textDecoration: "none", color: "red" }}>
              Log out
            </span>
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
