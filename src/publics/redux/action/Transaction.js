import Axios from "axios";
import localStorage from "local-storage";

let tok = localStorage.get("token");
export const getTransaction = () => {
  return {
    type: "GET_TRANSACTION",
    payload: Axios.get(
      `https://mobile-provider-clone.herokuapp.com/transaction/`,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
