import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <button>
        <Link to={"/signup"}>Signup Create a new user account for free!</Link>
      </button>
      <button>
        <Link to={"/login"}>Login I am an existing user</Link>
      </button>
    </div>
  );
};

export default WelcomePage;
