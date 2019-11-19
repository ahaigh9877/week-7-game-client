import React from "react";

const User = props => {
  return (
    <div>
      <p>Logged in as: {props.loggedin.username} </p>
      {/* <button onClick={props.logout}>Log out</button> */}
    </div>
  );
};

export default User;
