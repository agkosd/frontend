import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "ADD_PRODUCT":
      return { ...state, [action.payload.id]: action.payload };
    case "GET_PRODUCT":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_PRODUCT":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};