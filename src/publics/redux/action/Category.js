import Axios from "axios";

export const getCategory = () => {
  return {
    type: "GET_CATEGORY",
    payload: Axios.get(`https://mobile-provider-clone.herokuapp.com/category/`)
  };
};

export const getProduct = id => {
  let param = {
    params: {
      SubCategoryId: id
    }
  };
  return {
    type: "GET_PRODUCT",
    payload: Axios.get(
      `https://mobile-provider-clone.herokuapp.com/product/`,
      param
    )
  };
};
