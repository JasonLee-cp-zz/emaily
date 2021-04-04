import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

//Redux Thunk -> breaks the rule that the actino creator immediately returns the action
//Bend the rule but directly access to the dispatch function
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
//TODO: relative path -> in the prod, automatically go to backend
//TODO: if we return a function instead of a normal actions, the redux thunk will see this and will
//automatically call this function and pass as an "dispatch" argument
//like function(dispatch)

//TODO: Purpose: we do not want to return until the promise is resolved -> then dispatch
export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");

  // console.log("submitSurvey action res: ", res);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
