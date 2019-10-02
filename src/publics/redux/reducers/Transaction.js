const initialState = {
  transaction: [],

  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRANSACTION_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_TRANSACTION_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_TRANSACTION_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        transaction: action.payload.data.response
      };

    default:
      return state;
  }
};
export default Category;
