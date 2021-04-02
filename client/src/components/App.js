import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";

import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    console.log(this.props.fetchUser());
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          {/* exact={true} === exact */}
          <Route exact={true} path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App); //once assigned, we can access in APP components' props
