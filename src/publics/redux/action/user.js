import Axios from "axios";

export const getUser = () => {
  return {
    type: "GET_USER",
    payload: Axios.get(`https://mobile-provider-clone.herokuapp.com/user/`)
  };
};
