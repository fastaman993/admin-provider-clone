import Axios from "axios";
import qs from "qs";
import localStorage from "local-storage";

let tok = localStorage.get("token");
export const topUp = (id, data) => {
  const param = qs.stringify({
    credit: data
  });
  return {
    type: "TOP_UP",
    payload: Axios.put(
      `https://mobile-provider-clone.herokuapp.com/user/topUp/${id}`,
      param,
      { headers: { header_key: "PR0V1D3R", token: tok } }
    )
  };
};
