//TODO: SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import _ from "lodash";
import validateEmails from "../../utils/validateEmails";
import SurveyField from "./SurveyField";

import formFields from "./formFields";

{
  /* if we want to pass props to components, we can simply provide props in Field directly
        then it will automatically toss it to SurveyField component */
}
class SurveyForm extends Component {
  //TODO: use lodash library
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <div
          style={{
            border: "2px solid lightgrey",
            padding: "1rem",
            margin: "1rem",
          }}
        >
          <Field
            key={name}
            component={SurveyField}
            type="text"
            label={label}
            name={name}
            holderValue={label}
          />
        </div>
        /* above, component can receive stateless component too! (functional react component not class!) */
      );
    });
  }

  render() {
    return (
      <div>
        {/* the handleSubmit is provided by reduxForm. Whenever the user submits the form, the arrow function is called automatically*/}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}

          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Proceed
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  formFields.forEach(({ label, name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${label}`;
    }
  });

  return errors; //returns an object with properties matching the properties of "values" in the redux state
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
