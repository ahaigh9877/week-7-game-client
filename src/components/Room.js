import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class Room extends React.Component {
  onClick = async () => {
    const { name } = this.props.match.params;
    const { jwt } = this.props;
    const response = await superagent
      .put(`http://localhost:4000/join/${name}`)
      .set({ authorization: `Bearer ${jwt}` });
    console.log("respose test: ", response);
  };
  render() {
    const { name } = this.props.match.params;
    const { rooms } = this.props;
    console.log("rooms test: ", rooms);
    // find the room we're in using the name extracted from params or props or whatever.
    const room = rooms.find(room => room.name === name);
    // if (!room) {
    //   return "this room doesn't exist";
    // }
    const { users } = room;
    console.log("users: ", users);
    const list =
      users && users.length
        ? users.map(user => <p key={user.username}>{user.username}</p>)
        : "This room has no users";
    console.log("ROOM???", room);
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.onClick}>Join</button>
        {list}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { jwt: reduxState.loggedin.jwt, rooms: reduxState.rooms };
}

export default connect(mapStateToProps)(Room);
