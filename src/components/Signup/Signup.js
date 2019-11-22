import React from "react";
import { Link } from "react-router-dom";

const Signup = props => {
  return (
    <div>
      <h1>Sign Up </h1>
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
        <input type="submit" value="Sign Up" />
      </form>
      <button className="wpButton">
        <Link className="wpLink" to={"/"}>
          Back to Welcome Page
        </Link>
      </button>
    </div>
  );
};

export default Signup;
