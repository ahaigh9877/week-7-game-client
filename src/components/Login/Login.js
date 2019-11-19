import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Login = props => {
  if (props.loggedin.length === 0) {
    return (
      <div>
        <h1>Log In </h1>
        <form onSubmit={props.onSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={props.values.username}
              onChange={props.onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={props.values.password}
              onChange={props.onChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
        <p>{props.error}</p>
        <button>
          <Link to={"/"}>Back to Welcome Page</Link>
        </button>
      </div>
    );
  } else {
    console.log("props loggedin", props.loggedin);
    return (
      <div>
        <h2>Logged in successfully as {props.loggedin.username}</h2>
        <h3>Go to lobby to start a new game</h3>
        <button>
          <Link to={"/lobby"}>Games Lobby</Link>
        </button>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { error: state.error, loggedin: state.loggedin };
}

export default connect(mapStateToProps)(Login);