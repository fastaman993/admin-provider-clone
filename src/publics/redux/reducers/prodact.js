const initialState = {
  product: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Category = (state = initialState, action) => {
  switch (action.type) {
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
    case "POST_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "POST_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_PRODUCT_FULFILLED":
      state.product.response.rows.push(action.payload.data.response);
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        product: state.product
      };
    case "DELETE_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "DELETE_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_PRODUCT_FULFILLED":
      const dataAfterDelete = state.product.response.rows.filter(
        item => item.id != action.payload.data.response.id
      );
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        product: dataAfterDelete
      };

    default:
      return state;
  }
};
export default Category;
