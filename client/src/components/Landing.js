import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const Landing = ({ auth }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Emaily!</h1>
      {auth ? (
        <h5>How are you today?</h5>
      ) : (
        <h5>Please login to use our service</h5>
      )}
      {/* <h5>Please login to use our service</h5> */}
      {auth && (
        <Link to="/surveys">
          Start!
          {/* <i className="material-icons">arrow_forward</i> */}
        </Link>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  console.log("Landing mapStatetoProps State: ", state);
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);
