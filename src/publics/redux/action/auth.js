import Axios from "axios";

export const loginAdmin = param => {
  return {
    type: "LOGIN",
    payload: Axios.post(
      `https://mobile-provider-clone.herokuapp.com/user/login`,
      param
    )
  };
};
