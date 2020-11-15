const locationReducer = (state = { lat: "", long: "" }, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {lat:action.payload.latitude, long:action.payload.longitude};
      break;
    default:
      return state;
  }
};

export default locationReducer;