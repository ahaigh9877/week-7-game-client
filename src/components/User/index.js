import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/users";
import User from "./User";
// import { Redirect } from "react-router-dom";

// const logout = function (){

// }

class UserContainer extends Component {
  render() {
    return <User loggedin={this.props.loggedin} />;
  }
}

function mapStateToProps(state) {
  return { loggedin: state.loggedin };
}

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
