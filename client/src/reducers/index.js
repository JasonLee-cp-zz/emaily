import authReducer from "./authReducer";
import { reducer as reduxForm } from "redux-form";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  auth: authReducer,
  form: reduxForm,
});

export default allReducers;
