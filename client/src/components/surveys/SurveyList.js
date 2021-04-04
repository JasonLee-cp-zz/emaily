import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

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
        <div className="card" key={survey._id}>
          <div className="card-content black-text">
            <span className="card-title orange-text">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right ">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#" className="lime-text lighten-1">
              Yes: {survey.yes}
            </a>
            <a href="#" className="lime-text lighten-1">
              No: {survey.no}
            </a>
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
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
