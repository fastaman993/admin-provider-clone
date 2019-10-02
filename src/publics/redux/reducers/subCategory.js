const initialState = {
  subCategory: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const subCategory = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SUBCATEGORY_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_SUBCATEGORY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_SUBCATEGORY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        subCategory: action.payload.data
      };

    default:
      return state;
  }
};
export default subCategory;
