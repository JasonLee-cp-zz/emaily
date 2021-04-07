import React, { Component } from "react";
import { connect, useStore } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    // console.log("surveys: ", this.props.surveys);
    //reverse() -> newest first
    return this.props.surveys.reverse().map((survey) => {
      //   console.log("survey: ", survey);
      return (
        <div
          className="card"
          key={survey._id}
          surveyid={survey._id}
          style={{ marginTop: "1rem" }}
        >
          <div className="card-content black-text">
            <span className="card-title orange-text">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right grey-text">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#" className="grey-text lighten-1">
              Yes: {survey.yes}
            </a>
            <a href="#" className="grey-text lighten-1">
              No: {survey.no}
            </a>
            <button
              type="button"
              className="right"
              style={{
                backgroundColor: "grey" /* Green */,
                border: "none",
                color: "white",
                padding: "5px 10px",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              onClick={(e) => this.props.deleteSurvey(e)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  // console.log("SurveyList state: ", state.surveys);
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
