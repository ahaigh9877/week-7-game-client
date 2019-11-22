import React from "react";
import { Link } from "react-router-dom";

class Lobby extends React.Component {
  render() {
    const { rooms } = this.props;

    const roomsList = rooms.map(room => {
      if (room.users.length === 2) {
        return (
          <div key={room.name} className="roomNameWrapper">
            <p className="roomName">{room.name}</p>
            <p className="roomOccupancy">ROOM FULL</p>
            <button className="deadButton">F U L L</button>
          </div>
        );
      } else if (room.users.length === 1) {
        return (
          <div key={room.name} className="roomNameWrapper">
            <p className="roomName">{room.name}</p>
            <p className="roomOccupancy">One player waiting...</p>
            <button className="wpButton">
              <Link className="wpLink" to={`/room/${room.name}`}>
                JOIN!
              </Link>
            </button>
          </div>
        );
      } else {
        return (
          <div key={room.name} className="roomNameWrapper">
            <p className="roomName">{room.name}</p>
            <p className="roomOccupancy">Room empty</p>
            <button className="wpButton">
              <Link className="wpLink" to={`/room/${room.name}`}>
                JOIN!
              </Link>
            </button>
          </div>
        );
      }
    });
    return (
      <div>
        <h1>Games Lobby</h1>
        <form onSubmit={this.props.onSubmit}>
          <label>
            New Room:
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
