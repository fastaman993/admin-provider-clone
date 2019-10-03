import { combineReducers } from "redux";
import Category from "./Category";
import subCategory from "./subCategory";
import Product from "./prodact";
import Users from "./user";
import Transaction from "./Transaction";
import Report from "./report";
import Login from "./auth";

const rootReducer = combineReducers({
  Category,
  subCategory,
  Product,
  Users,
  Transaction,
  Report,
  Login
});

export default rootReducer;
