import { combineReducers } from "redux";
import Category from "./Category";
import subCategory from "./subCategory";

const rootReducer = combineReducers({
  Category,
  subCategory
});

export default rootReducer;
