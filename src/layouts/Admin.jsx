/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import { connect } from "react-redux";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";
import Load from "../components/Loading/loading";

import { style } from "variables/Variables.jsx";
import routes from "routes.js";
import { getCategory } from "../publics/redux/action/Category";

import image from "assets/img/sidebar-3.jpg";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      loadings: true,
      rejet: true
    };
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin" || prop.layout === "/page") {
        console.log("nooooooo");

        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
                category={this.state.category}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCategory());

    this.setState({
      loadings: this.props.loading,
      category: this.props.category.rows,
      rejet: this.props.reject
    });
    // let _notificationSystem = this.refs.notificationSystem;
    // let color = Math.floor(Math.random() * 4 + 1);
    // let level;
    // switch (color) {
    //   case 1:
    //     level = "success";
    //     break;
    //   case 2:
    //     level = "warning";
    //     break;
    //   case 3:
    //     level = "error";
    //     break;
    //   case 4:
    //     level = "info";
    //     break;
    //   default:
    //     break;
    // }
    // _notificationSystem.addNotification({
    //   title: <span data-notify="icon" className="pe-7s-gift" />,
    //   message: (
    //     <div>
    //       Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
    //       every web developer.
    //     </div>
    //   ),
    //   level: level,
    //   position: "tr",
    //   autoDismiss: 15
    // });
  };
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  rejet = () => {
    let det = (
      <div
        style={{
          marginTop: "20%",
          marginBottom: "50%",
          marginLeft: "45%"
        }}
      >
        <span>Conection Time Out</span>
      </div>
    );
    return det;
  };

  render() {
    console.log(this.props.reject);

    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} routes={routes} />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          {/* <div
            style={{
              marginTop: "20%",
              marginBottom: "50%",
              marginLeft: "45%"
            }}
          >
            <span>Conection Time Out</span>
          </div> */}
          {this.state.loadings ? (
            <div style={{ marginTop: "50%" }}>
              <Load />
            </div>
          ) : (
            <Switch>{this.getRoutes(routes)}</Switch>
          )}
          <Footer />
          {/* <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            handleHasImage={this.handleHasImage}
            bgColor={this.state["color"]}
            bgImage={this.state["image"]}
            mini={this.state["mini"]}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
          /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.Category.category.response,
    loading: state.Category.isLoading,
    reject: state.Category.isRejected
  };
};

export default connect(mapStateToProps)(Admin);
