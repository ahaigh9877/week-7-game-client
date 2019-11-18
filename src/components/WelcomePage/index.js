import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>QUIZ GAME!!!</h1>
      <br />
      <p>Create a new user account for free!</p>
      <button>
        <Link to={"/signup"}>Signup </Link>
      </button>
      <br />
      <p>I am an existing user</p>
      <button>
        <Link to={"/login"}>Login</Link>
      </button>
    </div>
  );
};

export default WelcomePage;
