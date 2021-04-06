import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends React.Component {
  renderContent() {
    // console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return "";
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        //user info
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            // to={this.props.auth ? "/surveys" : "/"}
            to="/"
            className="left brand-logo"
            style={{ marginLeft: "1rem" }}
          >
            Emaily
          </Link>

          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state.auth: ", state.auth);
  // console.log(state);
  return { auth: state.auth }; //props passed to Header component
}
export default connect(mapStateToProps)(Header);
