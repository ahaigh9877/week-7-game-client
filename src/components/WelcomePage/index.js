import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>ROCK, PAPER, SCISSORS GAME!!!</h1>
      <br />
      <p>Create a new user account for free!</p>
      <button className="wpButton">
        <Link className="wpLink" to={"/signup"}>
          Sign up{" "}
        </Link>
      </button>
      <br />
      <p>I am an existing user</p>
      <button className="wpButton">
        <Link className="wpLink" to={"/login"}>
          Log in
        </Link>
      </button>
    </div>
  );
};

export default WelcomePage;
