const initialState = {
  users: [],

  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        users: action.payload.data.response.rows
      };

    default:
      return state;
  }
};
export default Category;
