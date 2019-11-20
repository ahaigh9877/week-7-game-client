import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Link } from "react-router-dom";

class Room extends React.Component {
  state = { categories: [], token: "" };

  async componentDidMount() {
    const response = await superagent.get(
      "https://opentdb.com/api_token.php?command=request"
    );
    const token = response.body.token;
    const categories = await superagent.get(
      "https://opentdb.com/api_category.php"
    );
    const categoryNames = categories.body.trivia_categories.map(
      category => category.name
    );
    console.log(categoryNames);
    this.setState({ categories: categoryNames, token: token });
  }

  onClick = async () => {
    const { name } = this.props.match.params;
    const { jwt } = this.props;
    const { rooms } = this.props;
    const room = rooms.find(room => room.name === name);
    const { users } = room;
    console.log("users: ", users);
    if (users.length < 2) {
      const response = await superagent
        // .put(`https://evening-fortress-04185.herokuapp.com/join/${name}`)
        .put(`http://localhost:4000/join/${name}`)
        .set({ authorization: `Bearer ${jwt}` });

      console.log("respose test: ", response);
    } else {
      console.log("too many users");
      return <p></p>;
    }
  };

  leaveRoom = async () => {
    const { name } = this.props.match.params;
    const { jwt } = this.props;

    await superagent
      // .put(`https://evening-fortress-04185.herokuapp.com/join/${name}`)
      .put(`http://localhost:4000/leave/${name}`)
      .set({ authorization: `Bearer ${jwt}` });
  };

  render() {
    const { name } = this.props.match.params;
    const { rooms } = this.props;
    // find the room we're in using the name extracted from params or props or whatever.
    const room = rooms.find(room => room.name === name);
    if (!room) {
      return <p>This room doesn't exist</p>;
    }
    const { users } = room;
    if (users.length === 2) {
      return (
        <div>
          <p>This room is full!</p>
          <Link to="/lobby">Back to the lobby.</Link>
        </div>
      );
    } else {

      const list =
      users && users.length ? (
        users.map(user => <p key={user.username}>{user.username}</p>)
        ) : (
          <p>This room has no users</p>
          );
          
          return (
            <div>
        <h1>{name}</h1>
        <button onClick={this.onClick}>Join</button>
        <button onClick={this.leaveRoom}>
          <Link to="/lobby">Leave room</Link>
        </button>
        {list}
      </div>
    );
  }
  }
}

function mapStateToProps(reduxState) {
  return { jwt: reduxState.loggedin.jwt, rooms: reduxState.rooms };
}

export default connect(mapStateToProps)(Room);
