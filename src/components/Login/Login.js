import React from "react";
import { Link } from "react-router-dom";

const Login = props => {
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
      <button>
        <Link to={"/"}>Back to Welcome Page</Link>
      </button>
    </div>
  );
};

export default Login;
