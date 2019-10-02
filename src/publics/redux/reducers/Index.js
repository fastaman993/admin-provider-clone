import { combineReducers } from "redux";
import Category from "./Category";
import subCategory from "./subCategory";
import Product from "./prodact";

const rootReducer = combineReducers({
  Category,
  subCategory,
  Product
});

export default rootReducer;
