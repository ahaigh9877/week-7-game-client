import React, { Component } from "react";
import "./Game.css";
import paper from "../../images/paper.png";
import rock from "../../images/rock.png";
import scissors from "../../images/scissors.png";
import questionMark from "../../images/question.png";

class Game extends Component {
  render() {
    const {
      match: {
        params: { name }
      },
      loggedin: { username },
      rooms
    } = this.props;
    // const name = this.props.match.params.name
    // const username = this.props.loggedin.username

    const room = rooms.find(room => room.name === name);
    const user = room.users.find(user => user.username === username);
    const index = room.users.findIndex(user => user.username === username);
    const other = room.users.find(user => user.username !== username);

    const [first, second] = room.users;
    // const first = room.users[0]
    // const second = room.user[1]

    const imFirst = first === user;
    // const imOther = first !== user

    return (
      <div id="gameWrapper">
        <div id="player1Score">
          {first.username}'s
          <br />
          score:
          <br />
          <p className="scoreNr">{first.score}</p>
        </div>
        <div id="player2Score">
          {second.username}'s
          <br />
          score:
          <br />
          <p className="scoreNr">{second.score}</p>
        </div>

        <div id="player1ChoiceImageWrapper">
          <img className="questionMark" src={questionMark} alt="choice 1" />
        </div>
        <div id="player2ChoiceImageWrapper">
          <img className="questionMark" src={questionMark} alt="choice 2" />
        </div>

        <h1 id="choiceHeading">Make your choice</h1>

        <div id="choicesWrapper">
          <button className="selectButton" onClick={() => this.props.choose(1)}>
            <img className="choiceImg" src={paper} alt="choice 1" />
          </button>
          <button className="selectButton" onClick={() => this.props.choose(2)}>
            <img className="choiceImg" src={rock} alt="choice 2" />
          </button>
          <button className="selectButton" onClick={() => this.props.choose(3)}>
            <img className="choiceImg" src={scissors} alt="choice 3" />
          </button>
        </div>
        <button id="chooseButton" onClick={() => this.props.setChoice()}>
          CHOOSE!
        </button>
      </div>
    );
  }
}

export default Game;
