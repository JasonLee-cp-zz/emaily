import React from "react";
import { connect } from "react-redux";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Emaily!</h1>
      <h5>Please login to use our service</h5>
    </div>
  );
};

function mapStateToProps(state) {
  console.log("Landing mapStatetoProps State: ", state);
  return {};
}

export default connect(mapStateToProps)(Landing);
