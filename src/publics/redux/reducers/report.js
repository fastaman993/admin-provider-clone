const initialState = {
  report: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false
};

const Report = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REPORT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false
      };
    case "GET_REPORT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_REPORT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        report: action.payload.data.response
      };

    default:
      return state;
  }
};
export default Report;
