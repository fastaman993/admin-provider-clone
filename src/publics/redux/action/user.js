import Axios from "axios";
import localStorage from "local-storage";

let tok = localStorage.get("token");
export const getUser = () => {
  return {
    type: "GET_USER",
    payload: Axios.get(`https://mobile-provider-clone.herokuapp.com/user/`, {
      headers: { header_key: "PR0V1D3R", token: tok }
    })
  };
};
