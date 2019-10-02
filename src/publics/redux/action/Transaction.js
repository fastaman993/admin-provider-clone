import Axios from "axios";

export const getTransaction = () => {
  return {
    type: "GET_TRANSACTION",
    payload: Axios.get(
      `https://mobile-provider-clone.herokuapp.com/transaction/`
    )
  };
};
