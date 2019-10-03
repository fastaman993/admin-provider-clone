const initialState = {
  login: [],

  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        login: action.payload.data.response
      };

    default:
      return state;
  }
};
export default Category;
