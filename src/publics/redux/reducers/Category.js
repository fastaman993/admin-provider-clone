const initialState = {
  category: [],
  product: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_CATEGORY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CATEGORY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        category: action.payload.data
      };
    case "GET_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PRODUCT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        product: action.payload.data
      };

    default:
      return state;
  }
};
export default Category;
