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
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Report from "views/Report";
import Upgrade from "views/Upgrade.jsx";
import Login from "views/Login";
import Prodacts from "views/Prodacts";
import Item from "views/Item";
import History from "views/History";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    path: "/table",
    name: "User List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-note2",
    component: Login,
    layout: "/login"
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/prodacts",
    name: "Prodacts",
    icon: "pe-7s-shopbag",
    component: Prodacts,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "History",
    icon: "pe-7s-clock",
    component: History,
    layout: "/admin"
  },
  {
    path: "/item/:id",
    name: "Prodacts Item",
    icon: "pe-7s-shopbag",
    component: Item,
    layout: "/page"
  },

  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/UserReport",
    name: "User Report",
    icon: "pe-7s-bell",
    component: Report,
    layout: "/admin"
  }
  // {
  //   upgrade: true
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
