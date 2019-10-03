import Axios from "axios";
import qs from "qs";
import localStorage from "local-storage";

let tok = localStorage.get("token");

let instance = Axios.create({
  headers: {
    common: {
      // can be common or any other method
      header_key: "PR0V1D3R",
      token: tok
    }
  }
});

export const getCategory = () => {
  return {
    type: "GET_CATEGORY",
    payload: Axios.get(`https://mobile-provider-clone.herokuapp.com/category/`)
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
      param,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
export const deleteCategory = params => {
  return {
    type: "DELETE_CATEGORY",
    payload: Axios.delete(
      `https://mobile-provider-clone.herokuapp.com/category/${params}`,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
