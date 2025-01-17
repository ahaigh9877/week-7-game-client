import React, { Component } from "react";
import "./Game.css";
import paper from "../../images/paper.png";
import rock from "../../images/rock.png";
import scissors from "../../images/scissors.png";
import questionMark from "../../images/question.png";
import { Link } from "react-router-dom";

const pictures = {
  0: "",
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

    // const user = room.users.find(user => user.username === username);
    // const other = room.users.find(user => user.username !== username);

    const user = {
      username: "Player one",
      score: 2,
      previousScore: 1,
      previousChoice: 2
    };
    const other = {
      username: "Player two",
      score: 2,
      previousScore: 1,
      previousChoice: 2
    };

    let outcome = null;

    if (user.previousChoice === 0 && other.previousChoice === 0) {
      outcome = `Let's start the game :D`;
    } else if (user.previousChoice === other.previousChoice) {
      outcome = `${pictures[user.previousChoice]} ties with ${
        pictures[other.previousChoice]
      }!
      Next round is ON!`;
    } else if (user.score > user.previousScore) {
      outcome = `${pictures[user.previousChoice]} beats ${
        pictures[other.previousChoice]
      }!
      Next round is ON!`;
    } else if (other.score > other.previousScore) {
      outcome = `${pictures[user.previousChoice]} loses to ${
        pictures[other.previousChoice]
      }!
      Next round is ON!`;
    } else {
      outcome = "";
    }

    if (user.score !== 3 && other.score !== 3) {
      return (
        <div id="gameWrapper">
          <div id="player1InfoWrapper">
            <div className="scoreText">
              {user.username}'s
              <br />
              score:
            </div>
            <p className="scoreNr">{user.score}</p>
            You chose:
            <div className="previousChoiceImgWrapper">
              <img src={this.imageSwap(user.previousChoice)} alt="choice 1" />
            </div>
            {pictures[user.previousChoice]}
          </div>

          <div id="player2InfoWrapper">
            <div className="scoreText">
              {other.username}'s
              <br />
              score:
            </div>
            <p className="scoreNr">{other.score}</p>
            They chose:
            <div className="previousChoiceImgWrapper">
              <img src={this.imageSwap(other.previousChoice)} alt="choice 2" />
            </div>
            {pictures[other.previousChoice]}
          </div>
          <h2>First to 3 points WINS</h2>
          <div id="choiceHeadingWrapper">
            <h1 id="choiceHeading">Choose wisely...</h1>
          </div>

          {user.choiceId !== null && other.choiceId === null && (
            <div id="roundOutcomeWrapper">
              <h1 id="roundOutcome">Waiting for your opponent</h1>
            </div>
          )}

          {user.choiceId === null && other.choiceId === null && (
            <div id="roundOutcomeWrapper">
              <h1 id="roundOutcome">{outcome}</h1>
            </div>
          )}

          <div id="choicesWrapper">
            <div id="choiceCirclesWrapper">
              <button
                className="selectButton"
                onClick={() => this.props.choose(2)}
              >
                <img className="choiceImg" src={rock} alt="choice 2" />
              </button>

              <button
                className="selectButton"
                onClick={() => this.props.choose(1)}
              >
                <img className="choiceImg" src={paper} alt="choice 1" />
              </button>

              <button
                className="selectButton"
                onClick={() => this.props.choose(3)}
              >
                <img className="choiceImg" src={scissors} alt="choice 3" />
              </button>
            </div>
            {user.choiceId === null && (
              <button id="chooseButton" onClick={() => this.props.setChoice()}>
                CHOOSE!
              </button>
            )}
            {user.choiceId !== null && <button id="waitButton">Wait!</button>}
            {/* {user.choiceId === null && other.choiceId === null && <button id="chooseButton" onClick={() => this.props.setChoice()}>
              CHOOSE!
            </button>} */}
          </div>
        </div>
      );
    }

    if (user.score === 3) {
      return (
        <div id="gameWrapper">
          <div className="winnerFinalScoreWrapper">
            <div className="winnerFinalScoreText">
              {user.username}'s final score:
            </div>
            <div className="winnerFinalScoreNr">{user.score}</div>
          </div>
          <div className="loserFinalScoreWrapper">
            <div className="loserFinalScoreText">
              {other.username}'s final score:
            </div>
            <div className="loserFinalScoreNr">{other.score}</div>
          </div>
          <div className="winnerHeadingWrapper">
            <h1 className="winnerHeading">{user.username} is the winner :D</h1>
          </div>
          <button
            className="backToLobbyButton"
            onClick={() => this.props.setChoice()}
          >
            <Link className="backToLobbyLink" to={"/lobby"}>
              Back to Lobby!
            </Link>
          </button>
        </div>
      );
    } else if (other.score === 3) {
      return (
        <div id="gameWrapper">
          <div className="loserFinalScoreWrapper">
            <div className="loserFinalScoreText">
              {user.username}'s final score:
            </div>
            <div className="loserFinalScoreNr">{user.score}</div>
          </div>

          <div className="winnerFinalScoreWrapper">
            <div className="winnerFinalScoreText">
              {other.username}'s final score:
            </div>
            <div className="winnerFinalScoreNr">{other.score}</div>
          </div>
          <div className="winnerHeadingWrapper">
            <h1 className="winnerHeading">{other.username} is the winner!</h1>
          </div>
          <button
            className="backToLobbyButton"
            onClick={() => this.props.leaveRoom()}
          >
            <Link className="backToLobbyLink" to={"/lobby"}>
              Back to Lobby!
            </Link>
          </button>
        </div>
      );
    }
  }
}

export default Game;
