import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/users";
import Login from "./Login";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component {
  state = { username: "", password: "", redirect: false };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.login(this.state.username, this.state.password);

    this.setState({
      username: "",
      password: "",
      redirect: true
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/lobby"} />;
    }
    return (
      <Login
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return { loggedin: state.loggedin };
}

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
