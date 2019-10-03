import Axios from "axios";
import localStorage from "local-storage";

let tok = localStorage.get("token");
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
export const postProduct = params => {
  return {
    type: "POST_PRODUCT",
    payload: Axios.post(
      `https://mobile-provider-clone.herokuapp.com/product/`,
      params,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
export const editProduct = (id, data) => {
  return {
    type: "EDIT_PRODUCT",
    payload: Axios.patch(
      `https://mobile-provider-clone.herokuapp.com/product/${id}`,
      data,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
export const deleteProduct = id => {
  return {
    type: "DELETE_PRODUCT",
    payload: Axios.delete(
      `https://mobile-provider-clone.herokuapp.com/product/${id}`,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
