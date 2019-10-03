import Axios from "axios";
import qs from "qs";
import localStorage from "local-storage";

let tok = localStorage.get("token");

export const postSubCategory = params => {
  // const param = qs.stringify({
  //   CategoryId: paramsId,
  //   name: paramsName
  // });
  return {
    type: "POST_SUBCATEGORY",
    payload: Axios.post(
      `https://mobile-provider-clone.herokuapp.com/subCategory/`,
      params,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
export const getSubCategory = params => {
  console.log(params);

  const param = qs.stringify({
    CategoryId: params
  });
  return {
    type: "GET_SUBCATEGORY",
    payload: Axios.get(
      `https://mobile-provider-clone.herokuapp.com/subCategory/`,
      param,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
export const deleteSubCategory = params => {
  return {
    type: "DELETE_SUBCATEGORY",
    payload: Axios.delete(
      `https://mobile-provider-clone.herokuapp.com/subCategory/${params}`,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
export const getSubCategoryId = id => {
  return {
    type: "GET_SUBCATEGORYID",
    payload: Axios.get(
      `https://mobile-provider-clone.herokuapp.com/subCategory/${id}`,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
