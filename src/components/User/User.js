import React from "react";

const User = (props) => {
  
    return (
      <div>
        <p>Logged in as: {props.loggedin[0]} </p>
        {/* <button onClick={props.logout}>Log out</button> */}
      </div>
    );
  
}

export default User;
