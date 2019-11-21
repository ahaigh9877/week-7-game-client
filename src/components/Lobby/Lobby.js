import React from "react";
import { Link } from "react-router-dom";

class Lobby extends React.Component {
  render() {
    const { rooms } = this.props;

    const roomsList = rooms.map(room => {
      if (room.users.length === 2) {
        return <p>Room Name: {room.name} -- ROOM IS FULL</p>;
      } else if (room.users.length === 1) {
        return (
          <p key={room.name}>
            Room Name: <Link to={`/room/${room.name}`}>{room.name}</Link> 1/2 players
          </p>
        );
      } else {
        return (
          <p key={room.name}>
            Room Name: <Link to={`/room/${room.name}`}>{room.name}</Link>
          </p>
        );
      }
    });
    return (
      <div>
        <p>Create new room</p>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.props.values.name}
              onChange={this.props.onChange}
            />
          </label>
          <input type="submit" value="Create" />
        </form>
        {roomsList}
      </div>
    );
  }
}

export default Lobby;
