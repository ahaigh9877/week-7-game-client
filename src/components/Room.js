import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class Room extends React.Component {
  onClick = async () => {
    const { jwt, match } = this.props;
    const { name } = match.params;
    const url = `http://localhost:4000/join/${name}`;
    const response = await superagent
      .put(url)
      .set({ authorization: `Bearer ${jwt}` });
    console.log(response);
  };

  render() {
    const { rooms, match } = this.props;
    const { name } = match.params;
    const room = rooms.find(room => room.name === name);
    if (!room) {
      return <p>This room does not exist</p>;
    }
    const { users } = room;
    const userList =
      users && users.length ? (
        users.map(user => <p key={user.username}>{user.username}</p>)
      ) : (
        <p>This room has no players</p>
      );
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.onClick}>Join</button>
        {userList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jwt: state.loggedin.jwt,
    rooms: state.rooms
  };
}

export default connect(mapStateToProps)(Room);
