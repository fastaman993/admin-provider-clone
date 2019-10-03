import Axios from "axios";

export const getReport = () => {
  return {
    type: "GET_REPORT",
    payload: Axios.get(`https://mobile-provider-clone.herokuapp.com/report`)
  };
};
