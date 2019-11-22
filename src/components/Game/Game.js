import React, { Component } from "react";
import "./Game.css";
import paper from "../../images/paper.png";
import rock from "../../images/rock.png";
import scissors from "../../images/scissors.png";
import questionMark from "../../images/question.png";
import { Link } from "react-router-dom";

const pictures = {
  0: questionMark,
  1: "paper",
  2: "rock",
  3: "scissors"
};
class Game extends Component {
  state = {
    img1: pictures[0],
    img2: pictures[0]
  };

  imageSwap = choice => {
    console.log(" Choice: ", choice);
    if (choice === 1) {
      return paper;
    } else if (choice === 2) {
      return rock;
    } else if (choice === 3) {
      return scissors;
    } else {
      return questionMark;
    }
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

    console.log("user score: ", user.score);
    console.log("other score: ", other.score);

    // const user = {
    //   username: "YOU",
    //   score: 2,
    //   previousScore: 1,
    //   previousChoice: 2
    // };
    // const other = {
    //   username: "THEM",
    //   score: 1,
    //   previousScore: 1,
    //   previousChoice: 1
    // };

    let outcome = null;

    if (user.score > user.previousScore) {
      outcome = " beats ";
    } else {
      outcome = " loses to ";
    }

    if (user.score !== 3 && other.score !== 3) {
      return (
        <div id="gameWrapper">
          <div id="player1ChoiceImageWrapper">
            <p className="scoreText">
              {user.username}'s
              <br />
              score:
            </p>
            <p className="scoreNr">{user.score}</p>
            You chose:
            <img
              className="previousChoiceImg"
              src={this.imageSwap(user.previousChoice)}
              alt="choice 1"
            />
            {pictures[user.previousChoice]}
          </div>

          <div id="player2ChoiceImageWrapper">
            <p className="scoreText">
              {other.username}'s
              <br />
              score:
            </p>
            <p className="scoreNr">{other.score}</p>
            They chose:
            <img
              className="previousChoiceImg"
              src={this.imageSwap(other.previousChoice)}
              alt="choice 2"
            />
            {pictures[other.previousChoice]}
          </div>

          <h1 id="choiceHeading">
            make your
            <br />
            choice...
          </h1>
          <h1 id="roundOutcome">
            {pictures[user.previousChoice]}
            {outcome}
            {pictures[other.previousChoice]}!
          </h1>

          <div id="choicesWrapper">
            <div id="choiceCirclesWrapper">
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
