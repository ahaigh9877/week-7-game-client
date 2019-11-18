import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, createUser } from "../../actions/users";
import Signup from "./Signup";

class SignupContainer extends Component {
  state = { username: "", password: "" };
  componentDidMount() {
    this.props.getUsers();
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.createUser(this.state);

    this.setState({
      username: "",
      password: ""
    });
  };
  render() {
    return (
      <Signup
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

const mapDispatchToProps = { getUsers, createUser };

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
