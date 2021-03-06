//SurveyFormReview shows users review of their entries
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import * as actions from "../../actions";

import { withRouter } from "react-router-dom";

//reduxForm detects when a component(SurveyForm) is unmounted, it discards
//so we need to find a way to keep the data even if we hit "Cancel" button
const SurveyFormReview = ({
  onCancel,
  formValues,
  submitSurvey,
  history,
  remainingCredits,
}) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div
        key={name}
        style={{
          border: "1px solid lightgrey",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5
        style={{
          textAlign: "center",
          fontFamily: "Helvetica",
        }}
      >
        Please confirm your request
      </h5>
      {reviewFields}
      <button className="red btn-flat white-text" onClick={onCancel}>
        Cancel
      </button>

      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history, remainingCredits)} //history enables us to navigate around components(routes)
      >
        Confirm
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  // console.log("surveyFromReview mapStatetoProps state:", state);
  return {
    formValues: state.form.surveyForm.values, //console창 보셈 state
    remainingCredits: state.auth.credits,
  };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
//withRouter  provides some arbitrary components about the routes (history)
//you can get access to history object's properties.
//withRouter will re-render its component every time the route changes with the same props as <Route> render props: {match, location, history}
