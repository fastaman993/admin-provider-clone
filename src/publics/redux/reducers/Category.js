const initialState = {
  category: [],

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

    case "POST_CATEGORY_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "POST_CATEGORY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_CATEGORY_FULFILLED":
      state.category.response.rows.push(action.payload.data.response);
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        category: state.category
      };
    // case "POST_SUBCATEGORY_PENDING":
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isRejected: false,
    //     isFulfielled: false
    //   };
    // case "POST_SUBCATEGORY_REJECTED":
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isRejected: true
    //   };
    // case "POST_SUBCATEGORY_FULFILLED":
    //   //   let fill = state.category.response.rows.SubCategories.filter(
    //   //     item => item.id != action.payload.data.response.CategoryId,
    //   //   );
    //   // fill.push(action.payload.data.response);
    //   // let data2 = wishlist.find(target => target.id_course === course.id)

    //   let data = state.category.response.rows.map((dat, index) => {
    //     if (dat.SubCategories.id == action.payload.data.response.CategoryId) {
    //       dat.SubCategories.push(action.payload.data.response);
    //     }
    //     return;
    //   });

    //   return {
    //     ...state,
    //     isLoading: false,
    //     isFulfielled: true,
    //     category: data
    //   };

    default:
      return state;
  }
};
export default Category;
