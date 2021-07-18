const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0
};

const RegionListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "REGION_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };
    case "REGION_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "falha na requisicao de dados"
      };
    case "REGION_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
        count: action.payload.count
      };
    default:
      return state
  }
};

export default RegionListReducer;