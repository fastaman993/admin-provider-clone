import Axios from "axios";
import qs from "qs";

export const postSubCategory = params => {
  // const param = qs.stringify({
  //   CategoryId: paramsId,
  //   name: paramsName
  // });
  return {
    type: "POST_SUBCATEGORY",
    payload: Axios.post(
      `https://mobile-provider-clone.herokuapp.com/subCategory/`,
      params
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
      param
    )
  };
};
export const deleteSubCategory = params => {
  return {
    type: "DELETE_SUBCATEGORY",
    payload: Axios.delete(
      `https://mobile-provider-clone.herokuapp.com/subCategory/${params}`
    )
  };
};
export const editSubCategory = (id, name) => {
  const param = qs.stringify({
    name: name
  });
  return {
    type: "EDIT_SUBCATEGORY",
    payload: Axios.patch(
      `https://mobile-provider-clone.herokuapp.com/subCategory/${id}`,
      param
    )
  };
};
