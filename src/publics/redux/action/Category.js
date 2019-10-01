import Axios from "axios";
import qs from "qs";

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
export const postCategory = params => {
  const param = qs.stringify({
    name: params
  });
  return {
    type: "POST_CATEGORY",
    payload: Axios.post(
      `https://mobile-provider-clone.herokuapp.com/category/`,
      param
    )
  };
};
