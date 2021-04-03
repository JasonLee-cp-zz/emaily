//TODO: SurveyNew shows SurveyForm and SurveyReview

import React from "react";
import { connect } from "react-redux";

import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

import { reduxForm } from "redux-form"; //dumping values when clicking cancel back to dashboard

class SurveyNew extends React.Component {
  // constructor(props){
  //   super(props);

  //   this.state = {new: true};
  // }

  //TODO: above and below are exactly equal
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm", //for clearing out input fields when clicking cancel back to dashboard
  //TODO: why does it work?
  // In SurveyForm, destroyOnUnmount says if the component is unmounted, still keep the values
  //we did not pass "destoryOnUnmount" to the current SurveyNew component
  //Therefore, SurveyForm -> SurveyNew keeps the values BUT
  //SurveyNew -> Dashboard does not have any destroyOnUnmount logic so it will discard all the values
  //TODO: the reason we put form: "surveyForm" is that the "default behavior" if surveyForm is unmounted, dump all the valeus
})(SurveyNew);
