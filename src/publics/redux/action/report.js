import Axios from "axios";
import localStorage from "local-storage";

let tok = localStorage.get("token");
export const getReport = () => {
  return {
    type: "GET_REPORT",
    payload: Axios.get(`https://mobile-provider-clone.herokuapp.com/report`, {
      headers: { header_key: "PR0V1D3R", token: tok }
    })
  };
};
