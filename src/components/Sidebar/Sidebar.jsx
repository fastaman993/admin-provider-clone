import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import "../../assets/css/mycss.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    return (
      <div
        className="sidebar"
        // data-color="purple"

        // data-image={this.props.image}
      >
        {/* {this.props.hasImage ? (
          <div className="sidebar-background" style={sidebarBackground} />
        ) : null} */}
        <div className="logo">
          <a className="simple-text logo-mini">
            <div className="logo-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Axis_logo_2015.svg/1280px-Axis_logo_2015.svg.png"
                alt="logo_image"
              />
            </div>
          </a>
          <span className="simple-text ">My Axis</span>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}

            {this.props.routes.map((prop, key) => {
              if (!prop.redirect && prop.layout === "/admin")
                return (
                  <li
                    className={this.activeRoute(prop.layout + prop.path)}
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
