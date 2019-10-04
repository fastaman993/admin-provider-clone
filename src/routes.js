import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import Report from "views/Report";
import Login from "views/Login";
import Prodacts from "views/Prodacts";
import Item from "views/Item";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },

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

  {
    path: "/prodacts",
    name: "Product",
    icon: "pe-7s-shopbag",
    component: Prodacts,
    layout: "/admin"
  },

  {
    path: "/item/:id",
    name: "Prodacts Item",
    icon: "pe-7s-shopbag",
    component: Item,
    layout: "/page"
  },

  {
    path: "/UserReport",
    name: "User Report",
    icon: "pe-7s-bell",
    component: Report,
    layout: "/admin"
  }
];

export default dashboardRoutes;
