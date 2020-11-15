import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  loc: locationReducer,
  prod: productReducer,
  userInfo:userReducer,
  comment: commentReducer,
});
