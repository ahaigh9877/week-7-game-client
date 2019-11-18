import React from "react";

const Signup = props => {
  return (
    <div>
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
    </div>
  );
};

export default Signup;
