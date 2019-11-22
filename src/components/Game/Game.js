import React, { Component } from "react";
import "./Game.css";
import paper from "../../images/paper.png";
import rock from "../../images/rock.png";
import scissors from "../../images/scissors.png";
import questionMark from "../../images/question.png";
import { Link } from "react-router-dom";

const pictures = {
  0: questionMark,
  1: paper,
  2: rock,
  3: scissors
};
class Game extends Component {
  state = {
    img1: pictures[0],
    img2: pictures[0]
  };

  render() {
    const {
      match: {
        params: { name }
      },
      loggedin: { username },
      rooms
    } = this.props;

    const room = rooms.find(room => room.name === name);
    const user = room.users.find(user => user.username === username);
    const other = room.users.find(user => user.username !== username);

    if (user.score !== 3 && other.score !== 3) {
      return (
        <div id="gameWrapper">
          <div id="player1Score">
            {user.username}'s score: {user.score}
          </div>
          <div id="player2Score">
            {other.username}'s score: {other.score}
          </div>

          <div id="player1ChoiceImageWrapper">
            <img
              className="questionMark"
              src={this.state.img1}
              alt="choice 1"
            />
          </div>
          <div id="player2ChoiceImageWrapper">
            <img
              className="questionMark"
              src={this.state.img2}
              alt="choice 2"
            />
          </div>

          <h1 id="choiceHeading">Make your choice</h1>

          <div id="choicesWrapper">
            <button
              className="selectButton"
              onClick={() => this.props.choose(1)}
            >
              <img className="choiceImg" src={paper} alt="choice 1" />
            </button>
            <button
              className="selectButton"
              onClick={() => this.props.choose(2)}
            >
              <img className="choiceImg" src={rock} alt="choice 2" />
            </button>
            <button
              className="selectButton"
              onClick={() => this.props.choose(3)}
            >
              <img className="choiceImg" src={scissors} alt="choice 3" />
            </button>
          </div>
          <button id="chooseButton" onClick={() => this.props.setChoice()}>
            CHOOSE!
          </button>
        </div>
      );
    }

    if (user.score === 3) {
      return (
        <div id="gameWrapper">
          <div id="player1Score">
            {user.username}'s score: {user.score}
          </div>
          <div id="player2Score">
            {other.username}'s score: {other.score}
          </div>
          <h1 id="choiceHeading">{user.username} is the winner :D</h1>
          <button id="chooseButton" onClick={() => this.props.setChoice()}>
            <Link to={"/lobby"}>Back to Lobby!</Link>
          </button>
        </div>
      );
    } else if (other.score === 3) {
      return (
        <div id="gameWrapper">
          <div id="player1Score">
            {user.username}'s score: {user.score}
          </div>
          <div id="player2Score">
            {other.username}'s score: {other.score}
          </div>
          <h1 id="choiceHeading">{other.username} is the winner :D</h1>
          <button id="chooseButton" onClick={() => this.props.leaveRoom()}>
            <Link>Back to Lobby!</Link>
          </button>
        </div>
      );
    }
  }
}

export default Game;
