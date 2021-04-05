import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS, DELETE_SURVEY } from "./types";

//Redux Thunk -> breaks the rule that the actino creator immediately returns the action
//Bend the rule but directly access to the dispatch function
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  // console.log("fetchuser payload: ", res.data);
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

export const submitSurvey = (values, history, remainingCredits) => async (
  dispatch
) => {
  // const user = await axios.get("/api/current_user");
  // const remainingCredits = user.data.credits;
  // console.log("userCredits: ", remainingCredits);
  if (remainingCredits == 0) {
    alert("You have 0 credit! Please refill the credits before you proceed!");
    return;
  }

  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");

  // console.log("submitSurvey action res: ", res);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  // console.log("fetchSurveys action activated");
  const res = await axios.get("/api/surveys");
  // console.log("fetchSurveys res.data:", res.data);
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = (e) => async (dispatch) => {
  const surveyId_toBeDeleted = e.target.parentElement.parentElement.getAttribute(
    "surveyid"
  );
  const res = await axios.delete(`/api/surveys/${surveyId_toBeDeleted}`);
  // console.log("deletedSurvey data: ", res.data);
  const newSurveys = await axios.get("api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: newSurveys.data });
  // dispatch({ type: FETCH_USER, payload: res.data });
};
